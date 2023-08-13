const url = 'https://ixorabg.com'

export default async function sitemap() {
    const routes = ['', , '/contacts', '/order', '/video', ].map((route) => ({
        url:`${url}${route}`,
        lastModified: new Date().toISOString()
    }))
    return [...routes]
}