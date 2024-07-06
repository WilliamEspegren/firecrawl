import { Spider } from '@spider-cloud/spider-client';

type SpiderCoreResponse = {
    content?: string;
    message?: string;
    pageError?: string;
    pageStatusCode?: number;
    url?: string;
}

export async function scrapWithSpider(
    url: string,
    pageOptions: {}
): Promise<SpiderCoreResponse> {

    pageOptions = {
        ...pageOptions,
        cache: false
    }

    try {
        const spider = new Spider();
        const response = await spider.scrapeUrl(url, pageOptions);
        return {
            content: response[0].content,
            pageStatusCode: response[0].status,
            url: response[0].url,
        }
    } catch (error) {
        console.log(error);
        return {
            pageError: error.message,
        }
    }
}