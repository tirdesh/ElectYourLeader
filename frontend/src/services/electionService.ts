// frontend/src/services/electionService.ts

import axios from 'axios';

const API_URL = 'http://localhost:3002/elections'; // Update with your actual backend URL

export const registerElection = async (name: string, active: boolean) => {
    try {
        const response = await axios.post(API_URL, { name, active });
        return response.data; // Return the created election data
    } catch (error) {
        throw Error('Failed to register election');
    }
};

export const getAllElections = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; // Return all elections
    } catch (error) {
        throw Error('Failed to fetch elections');
    }
};

export const getElectionById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data; // Return the election with the specified ID
    } catch (error) {
        throw Error('Failed to fetch election');
    }
};

export const updateElection = async (id: string, name: string, active: boolean) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, { name, active });
        return response.data; // Return the updated election data
    } catch (error) {
        throw Error('Failed to update election');
    }
};

export const deleteElection = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data; // Return the deleted election data
    } catch (error) {
        throw Error('Failed to delete election');
    }
};
