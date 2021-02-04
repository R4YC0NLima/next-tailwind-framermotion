import Header from '../components/Header'
const Layout: React.FC = ({children}) => {
    return (
        <div className="max-w-5xl mx-auto sm:px-6 px-4">
            <Header />
            {children}
        </div>
    )
}

export default Layout