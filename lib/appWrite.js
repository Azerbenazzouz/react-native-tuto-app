import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';
export const appwriteConfig = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.codewith.zouu',
    projectId: '6689183f0026c9b09819',
    databaseId: '66893e6a0022fed9f98e',
    userCollectionId: '66893ed0001859144846',
    videoCollectionId: '66893efe0005f06172a0',
    storageId: '668940900005538830b0',
};

const client = new Client();
client
.setEndpoint(appwriteConfig.endpoint)
.setProject(appwriteConfig.projectId)
.setPlatform(appwriteConfig.platform);
const account = new Account(client);
const avavtars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, name) => {
    try {
        const newAccount = await account.create(ID.unique(), email, password, name);

        if(!newAccount) throw new Error;
        
        const avatarUrl = avavtars.getInitials(name);
        const newUser = await databases.createDocument(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username:name,
                avatar:avatarUrl,
            }
        );
        await login(email, password);
    } catch (error) {
        throw new Error(error);
    }
};

export const login = async (email, password) => {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        throw new Error(error);
    }
};

export const logout = async () => {
    await account.deleteSession('current');
}

export async function getAccount() {
    try {
      const currentAccount = await account.get();
  
      return currentAccount;
    } catch (error) {
      throw new Error(error);
    }
  }

export async function getCurrentUser() {
    try {
      const currentAccount = await getAccount();
      if (!currentAccount) throw Error;
  
      const currentUser = await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.userCollectionId,
        [Query.equal("accountId", currentAccount.$id)]
      );
  
      if (!currentUser) throw Error;
  
      return currentUser.documents[0];
    } catch (error) {
      console.log(error);
      return null;
    }
  }