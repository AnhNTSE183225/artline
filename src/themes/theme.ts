import { theme, ThemeConfig } from 'antd'

export const globalTheme: ThemeConfig = {
    algorithm: theme.defaultAlgorithm,
    token: {
        fontFamily: 'Poppins, sans-serif',
        // Content background color
        colorBgLayout: '#404040',
        // Default color text
        colorText: '#FFFFFF',
        // Default selected color text
        colorPrimary: '#FFFFFF',
        // Default selected color (for menu)
        colorPrimaryBg: '#E17711',
        // Default background color for menu
        colorBgContainer: '#1F1F1F',
    },
    components: {
        Layout: {
            siderBg: '#1F1F1F',
            headerBg: '#1F1F1F',
        },
        Menu: {
            itemBorderRadius: 8,
            itemHeight: 50,
            itemMarginBlock: 15,
            itemMarginInline: 10,
            itemHoverBg: '#414141',
        }
    }
}