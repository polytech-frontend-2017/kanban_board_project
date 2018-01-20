import React, { Component } from 'react'
import './style/AddPerson.css'
class SearchPerson extends Component
{
    constructor (props) {
        super(props)
        this.state = {
          cards: [
            {
              id: 1,
              name: 'Jhony'
            },
            {
              id: 2,
              name: 'Barry'
            }, {
              id: 4,
              name: 'PZ'
            }
          ]
        }
    
       
      }

    render()
    {
      return(
        <form>
            <input 
              type="text"
              placeholder="Search..."
              className="InputSearchPerson"
            />
            <input 
              type="submit"
              value="Go"
              className="InputSubmitSearchPerson"
            />
        </form>
      );
    }
}
 
export default SearchPerson;