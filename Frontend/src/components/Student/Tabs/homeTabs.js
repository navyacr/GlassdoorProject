import Navigationbar from '../../Student/Navbar/navbar_student';
import React, { Component } from 'react';
import { CardImg, Button } from 'react-bootstrap';
import Comp from '../component';
import CompanyOverview from '../CompanyOverview/companyOverview';
import ReviewTab from '../Reviews/ReviewTab';
import AddSalary from '../Salary/AddSalary';
import JobsTab from '../Jobs/jobsTab';
class HomeTabs extends Component {
  constructor(props) {
    super(props);

    this.loadComp = this.loadComp.bind(this);
    console.log('props:', this.props);
    if (this.props.location.category) {
      if (this.props.location.category === 'reviews') {
        console.log('in if condition');
        this.state = {
          loadComponent: (
            <ReviewTab
              companyName={this.props.location.companyName}
            ></ReviewTab>
          ),
        };
      } else if (this.props.location.category === 'overview') {
        this.state = {
          loadComponent: (
            <CompanyOverview
              companyID={this.props.location.companyID} companyName={this.props.location.companyName}
            ></CompanyOverview>
          ),
        };
      } else if (this.props.location.category === 'salaries') {
        this.state = {
          loadComponent: (
            <AddSalary
              companyName={this.props.location.companyName}
            ></AddSalary>
          ),
        };
      }
    } else {
      this.state = {
        loadComponent: <Comp str='This is Overview'></Comp>,
      };
    }
  }

  componentWillReceiveProps(nextProp) {
    console.log('Received: ', nextProp);
  }
  loadComp(param) {
    console.log('Button clicked', param);
    this.setState({ loadComponent: param });
    this.forceUpdate();
  }

  render() {
    // TODO add image link
    // var imgSrc = `${backendServer}company/imageUpload/${fileName}`;
    return (
      <React.Fragment>
        <Navigationbar />
        <div style={{ margin: '5px' }}>
          <div class='jumbotron' style={{ paddingBottom: '0px' }}>
            <div class='row'>
              <div
                class='col-xs-3 card profilePic'
                style={{ position: 'absolute' }}
              >
                <card>
                  <CardImg
                    style={{ height: '200px', width: '175px' }}
                    // src={imgSrc}
                    className='profileImg'
                  />
                </card>
              </div>
              <div class='col-xs-4 profileName' style={{ marginLeft: '200px' }}>
                <h1>
                  <b>{this.props.location.companyName}</b>
                </h1>

                <br />
                <Button
                  onClick={() =>
                    this.loadComp(
                      <CompanyOverview
                        companyID={this.props.location.companyID} companyName={this.props.location.companyName}
                      ></CompanyOverview>
                    )
                  }
                  style={{
                    backgroundColor: 'transparent',
                    color: 'green',
                    border: 'none',
                    fontSize: '25px',
                  }}
                >
                  {' '}
                  Overview{' '}
                </Button>
                <Button
                 onClick={() =>
                  this.loadComp(
                    <JobsTab
                      companyName={this.props.location.companyName}
                    ></JobsTab>
                  )
                }
                  style={{
                    backgroundColor: 'transparent',
                    color: 'green',
                    border: 'none',
                    borderLeft: '1px solid #e6e6e6',
                    fontSize: '25px',
                  }}
                >
                  {' '}
                  Jobs{' '}
                </Button>
                <Button
                  onClick={() =>
                    this.loadComp(
                      <ReviewTab
                        companyName={this.props.location.companyName}
                      ></ReviewTab>
                    )
                  }
                  href=''
                  style={{
                    backgroundColor: 'transparent',
                    color: 'green',
                    border: 'none',
                    borderLeft: '1px solid #e6e6e6',
                    fontSize: '25px',
                  }}
                >
                  {' '}
                  Reviews{' '}
                </Button>
                <Button
                  onClick={() =>
                    this.loadComp(<Comp str='This is Interviews'></Comp>)
                  }
                  style={{
                    backgroundColor: 'transparent',
                    color: 'green',
                    border: 'none',
                    borderLeft: '1px solid #e6e6e6',
                    fontSize: '25px',
                  }}
                >
                  {' '}
                  Interviews{' '}
                </Button>
                <Button
                  onClick={() =>
                    this.loadComp(
                      <AddSalary
                        companyName={this.props.location.companyName}
                      ></AddSalary>
                    )
                  }
                  style={{
                    backgroundColor: 'transparent',
                    color: 'green',
                    border: 'none',
                    borderLeft: '1px solid #e6e6e6',
                    fontSize: '25px',
                  }}
                >
                  {' '}
                  Salaries{' '}
                </Button>
                <Button
                  style={{
                    backgroundColor: 'transparent',
                    color: 'green',
                    border: 'none',
                    borderLeft: '1px solid #e6e6e6',
                    fontSize: '25px',
                  }}
                >
                  {' '}
                  Photos{' '}
                </Button>
              </div>
            </div>
          </div>
          <div class='row' style={{ marginLeft: '10px' }}>
            <div
              class='col-xs-3'
              style={{
                textAlign: 'left',
                height: '100%',
                marginLeft: '40%',
                marginTop: '5%',
              }}
            ></div>
            <hr />
          </div>
        </div>

        {this.state.loadComponent}
      </React.Fragment>
    );
  }
}

export default HomeTabs;
