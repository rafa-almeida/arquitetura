import Header from '../components/Header'


const  Default = ({ children }) => {

    return (
        <>
            <Header />
            {children}
            <footer/>

            
        </>
    )
}

export default Default 