import axios from 'axios';
const baseUrl = 'https://unite-gaming.com/wp-json/wp/v2'
export const UniteService = {
    async getPosts(count: number, id: number ) {
        const response = await axios.get(`${baseUrl}/posts/?per_page=${count}&categories=${id}`)
        return response.data
    },
    async getPost(id: string) {
        const response = await axios.get(`${baseUrl}/posts/${id}`)
        return response.data
    },
    async getMorePosts(count: number, id: number, offset: number) {
        const response = await axios.get(`${baseUrl}/posts/?per_page=${count}&categories=${id}&offset=${offset}`)
        return response.data
    },
    async getImage(id: number) {
        const response = await axios.get(`${baseUrl}/media/${id} `)
        return response.data.source_url
    }
}