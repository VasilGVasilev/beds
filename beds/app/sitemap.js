const url = 'https://testvgv.net'

export default async function sitemap() {
    const routes = ['', , '/contacts', '/order', '/video', '/opinions', ].map((route) => ({
        url:`${url}${route}`,
        lastModified: new Date().toISOString()
    }))
    return [...routes]
}