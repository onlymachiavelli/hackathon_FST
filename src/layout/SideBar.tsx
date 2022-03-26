import { NavLink } from "react-router-dom"

const SideBar = () =>{
    return (
  <nav aria-label="side bar" aria-orientation="vertical" className="flex-none flex flex-col items-center text-center bg-black text-gray-400 border-r">
    <div className="h-16 flex items-center w-full">
      <img className="h-auto w-8 mx-auto" src="/public/assets/logo.png" />
    </div>

    <ul>
      <li>
        <NavLink title="Homepage" to="/md/" className={( {isActive} ) => {          
          return `h-16 px-6 flex items-center text-white w-full ${isActive ? 'bg-green' : ''}` } 
        }
        >
          <i className="mx-auto">
            <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 6.453l9 8.375v9.172h-6v-6h-6v6h-6v-9.172l9-8.375zm12 5.695l-12-11.148-12 11.133 1.361 1.465 10.639-9.868 10.639 9.883 1.361-1.465z" />
            </svg>
          </i>
        </NavLink>
      </li>
      <li>
      <NavLink title="Tenants" to="/md/users" className={( {isActive} ) => {          
          return `h-16 px-6 flex items-center text-white w-full ${isActive ? 'bg-green' : ''}` } 
        }
        >
          <i className="mx-auto">
            <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M19 7.001c0 3.865-3.134 7-7 7s-7-3.135-7-7c0-3.867 3.134-7.001 7-7.001s7 3.134 7 7.001zm-1.598 7.18c-1.506 1.137-3.374 1.82-5.402 1.82-2.03 0-3.899-.685-5.407-1.822-4.072 1.793-6.593 7.376-6.593 9.821h24c0-2.423-2.6-8.006-6.598-9.819z" />
            </svg>
          </i>
        </NavLink>
      </li>
      <li>
      <NavLink title="Transactions" to="/md/transactions" className={( {isActive} ) => {          
          return `h-16 px-6 flex items-center text-white w-full ${isActive ? 'bg-green' : ''}` } 
        }
        >
          <i className="mx-auto">
            <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M5 19h-4v-4h4v4zm6 0h-4v-8h4v8zm6 0h-4v-13h4v13zm6 0h-4v-19h4v19zm1 2h-24v2h24v-2z" />
            </svg>
          </i>
        </NavLink>
      </li>
      <li>
      <NavLink title="Settings" to="/md/passdue" className={( {isActive} ) => {          
          return `h-16 px-6 flex items-center text-white w-full ${isActive ? 'bg-green' : ''}` } 
        }
        >          <i className="mx-auto">
            <svg className="fill-current h-5 w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
            </svg>
          </i>
        </NavLink>
      </li>
    </ul>

    <div className="mt-auto h-16 flex items-center w-full">
      <img className="h-auto w-10 mx-auto rounded-sm" src="https://ui-avatars.com/api/?name=John+Doe" />
    </div>
  </nav>
    )
}


export default SideBar