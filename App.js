import './App.css';

function App() {
  return (

    <div class="">

      <div class="" >
        <nav class="navbar navbar-expand-lg navbar-info bg-info">
          <a class="navbar-brand" href="#">FoodAdvisor</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Sign in </a>
              </li>
              <li class="nav-item active">
                <a class="nav-link" href="#">Log in </a>
              </li>
            </ul>
          </div>

        </nav>
      </div>


      <div class="container-fluid">
        <h1 class="display-4">Hello, world!</h1>
      </div>
        
      <div class="container-fluid"> 
        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>

      <br></br>
      <div class="container bg-info">
        <div class="row">
          <div class="col-sm">
          <br></br>
            One of three columns
          </div>
          <div class="col-sm">
          <br></br>
            two of three columns
          </div>
          <div class="col-sm">
          <br></br>
            three of three columns
          </div>          
        </div>
      </div>

      <div class="container bg-info">
        <div class="row">
          <div class="col-sm">
          <br></br>
            One of 2 columns
          </div>
          <div class="col-sm">
          <br></br>
            two of 2 columns
          </div>        
        </div>
      </div>

      
    </div>
  );
}

export default App;
