import { NextConfig } from 'next'
import path from 'path'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'src')],
        additionalData: `@use "styles/prepend" as *;`,
    },
}

const withNextIntl = createNextIntlPlugin()
export default withNextIntl(nextConfig)
