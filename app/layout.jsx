import '@styles/globals.css'; //import global styles

export const metadata = {
    title: 'PromptVault',
    description: 'Store and share AI Prompts'
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>
                <div className="main">
                    <div className="gradient" />    
                    </div>

                    <main className="app">
                        {children}
                    </main>
            </body>
        </html>
    )
}

export default RootLayout