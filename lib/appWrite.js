import { Client, Account } from 'react-native-appwrite';
const client = new Client();
client
.setEndpoint(appwriteConfig.endpoint)
.setProject(appwriteConfig.projectId)
.setPlatform(appwriteConfig.platform);
const account = new Account(client);

export const appwriteConfig = {
    endpoint: 'https://api.appwrite.io/v1',
    platform: 'com.codewith.zouu',
    projectId: '6689183f0026c9b09819',
    databaseId: '66893e6a0022fed9f98e',
    userCollectionId: '66893ed0001859144846',
    videoCollectionId: '66893efe0005f06172a0',
    storageId: '668940900005538830b0',
};

export const createUser = async (email, password, name) => {
    await account.create(ID.unique(), email, password, name);
    await login(email, password);
};

export const login = async (email, password) => {
    await account.createSession(email, password);
};

export const logout = async () => {
    await account.deleteSession('current');
}

