// frontend/src/services/candidateService.ts

import axios from 'axios';

const API_URL = 'http://localhost:3002/candidates'; // Update with your actual backend URL

export const registerCandidate = async (name: string) => {
    try {
        const response = await axios.post(API_URL, { name });
        return response.data; // Return the created candidate data
    } catch (error) {
        throw Error('Failed to register candidate');
    }
};

export const getAllCandidates = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data; // Return all candidates
    } catch (error) {
        throw Error('Failed to fetch candidates');
    }
};

export const getCandidateById = async (id: string) => {
    try {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data; // Return the candidate with the specified ID
    } catch (error) {
        throw Error('Failed to fetch candidate');
    }
};

export const updateCandidate = async (id: string, name: string) => {
    try {
        const response = await axios.put(`${API_URL}/${id}`, { name });
        return response.data; // Return the updated candidate data
    } catch (error) {
        throw Error('Failed to update candidate');
    }
};

export const deleteCandidate = async (id: string) => {
    try {
        const response = await axios.delete(`${API_URL}/${id}`);
        return response.data; // Return the deleted candidate data
    } catch (error) {
        throw Error('Failed to delete candidate');
    }
};
