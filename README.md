
## Consuming a REST API with Angular Http-Service in Typescript####

# Configuration
I have the configuration seperated stored in my application. In my app is  where I store all my values. If anything changes there, like a version of the api which is stored in the url or the endpoint/server whatever, I can do those changes immediatelly at one point.


# The Service
I created  a module which only contains a service which is only responsible for calling an API with a specific endpoint: rest.houses.service.ts

This dataservice gets the configuration we just did and the HTTP-Service via DI. We included it over the new module-loading-syntax.

It is also important to tell the http-calls which header to use. “Application/Json” in this case. We are doing this via an interceptor and the new HttpClientModule.

Now we can include, inject and use this service to make http-calls to our API like this (rest.houses.service.ts).

@Injectable()
export class RestHouseService {
  private baseUrl =  '/v1/advertisements';
  }
  constructor(private http: Http) {
  }

# Custom pipe
I used a custompipe component to customize the library and remove the decimals from the space.

## Bootstrap
I imported bootstrat 4 to app.component.html
For this app is the faster because bootstrap has a component 'card' with classes ready made for that. Was a question of time and comfortability.
I choosed import via cdn because give less probems and was more than enough for this case.
I choosed working with style.css and not sass because there was very less additional styles to use.

>>>>>>> c65d57ee028ce9c6415bbb8501fa596595063ba1
