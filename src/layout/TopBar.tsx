const TopBar = () =>{
    return (
    <nav aria-label="top bar" className="flex-none flex justify-between bg-gray-50 h-16">
      
      <ul aria-label="top bar left" aria-orientation="horizontal" className="flex">
          <li><img className="h-11 w-auto mx-auto my-3" src="/public/assets/landhippo.png"/></li>
        </ul>

        <ul aria-label="top bar right" aria-orientation="horizontal" className="px-9 flex items-center">
            <li>
            <button type="submit" className="text-white bg-red-900  font-medium rounded-sm text-sm w-full sm:w-auto px-5 py-2.5 text-center  " >Leave</button>

            </li>
        </ul>
        </nav>
    )
}


export default TopBar