export const useArticles = async () => {
    const {data: articles} = await useAsyncData('articles', () => queryContent('articles')
        .sort({date: -1})
        .without('body')
        .find({ draft: false }));
    return articles;
}