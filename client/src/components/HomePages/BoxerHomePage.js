import React, { Component } from 'react'

import Jumbotron from '../Junbotron/Jumbotron';
import Card from '../Cards/Card';
import MainTable from '../Tables/BoxerTable/BoxerTable';

export default class BoxerHomePage extends Component {
    render() {
        return (
            <div className="container p-4">
        <div className="row">
          <div className="col-md-12">
            <Jumbotron />
          </div>
        </div>
        <div className="row equal">
          <div className="col-md-4">
              <Card />
          </div>
          <div className="col-md-8">
              <MainTable />
          </div>
        </div>
      </div>
        )
    }
}
