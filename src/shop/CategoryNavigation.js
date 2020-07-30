import React, { Component } from 'react';
import { ToggleLink } from "../ToggleLink";

export class CategoryNavigation extends Component {

   render() {
      const { baseUrl, categories } = this.props

      return (
         <React.Fragment>

            <ToggleLink
               to={baseUrl}
               exact={true}>
               All
            </ToggleLink>

            {
               categories && categories.map(cat =>
                  <ToggleLink
                     key={cat}
                     to={`${baseUrl}/${cat.toLowerCase()}`}
                  >
                     {cat}
                  </ToggleLink>
               )
            }

         </React.Fragment>
      )
   }
}
