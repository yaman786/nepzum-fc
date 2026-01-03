
import { projectId, dataset, apiVersion } from '../env';

export async function sanityFetch<T>({
    query,
    params = {},
    tags = [],
}: {
    query: string;
    params?: Record<string, unknown>;
    tags?: string[];
}): Promise<T> {
    const isConfigured = !!projectId && !!dataset;

    if (!isConfigured) {
        console.warn('Sanity not configured, returning empty array');
        return [] as unknown as T;
    }

    try {
        // Construct the URL manually to bypass client library validation for 'Default' dataset name
        const baseUrl = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}`;

        // Encode the query
        const searchParams = new URLSearchParams();
        searchParams.set('query', query);

        // Add params
        Object.keys(params).forEach(key => {
            searchParams.set(`$${key}`, JSON.stringify(params[key]));
        });

        const url = `${baseUrl}?${searchParams.toString()}`;

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            next: {
                revalidate: 60, // Default revalidation
                tags,
            },
        });

        if (!response.ok) {
            throw new Error(`Sanity API error: ${response.statusText}`);
        }

        const { result } = await response.json();
        return result as T;
    } catch (error) {
        console.error('Error fetching from Sanity:', error);
        throw error;
    }
}
