export default function Navbar () {
    return (
        <div className="w-full">
            <div className="w-full flex justify-evenly p-4 bg-slate-600">
            <a href="/"><span>DreamVault Logo</span></a>
             <div className="flex flex-row">
            <a href="/">Home</a >
            <a href="/About">About</a >
            <a href="/SignUp">SignUp</a >
            <a href="/SignIn">SignIn</a >
            </div>
        </div>
        </div>
    )
}