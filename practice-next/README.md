What nextjs ?
Creating a nextjs project
Client and Server components
Data Fetching
Caching
Static and Dynamic Rendering 

Framework for fast and search-friendly applications 
React -> Library for building interactive UI's 
Nextjs -> Framework = libs + tools + conventions 
has its own routing library 

Tool -> 
Compiler -> Transform and minify JS code 
CLI -> Build and start apps
Nodejs Runtime

Nodejs runtime - 
Execution of JS code 
1. Within Web browser (Client)
2. Within Nodejs Runtime (Server) (Fancy term for a program that can execute JS code)

Allows to do Full-stack web development

Nodejs Runtime allows us to render our component on the server and send their content to the client (SSR)

Faster and SEO friendly 

Static-Site Generation (Rendering component at the build time)

Nextjs 
Router is based on File System 
Routing System in Nextjs is based on convention 
App Router -> If we add any other file in the users folder it is not going to be accessible 

Pages Router -> If we add any other file it is going to be publicly accessible 

Client Side Navigation 

If we <a> tag all of the resources are redownloaded which are not part of the new page

If we use <Link> only those resources are downloaded that
are part of the users page and are not already downloaded like Navbar, Footer, Sidebar


Rendering Environments

Client Side Rendering -> 
1. Web Browser
2. Large Bundles
3. Resource Heavy
4. No SEO
5. Less Secure 

Server Side Rendering 
1. Nodejs Runtime
2. Resource Efficient
3. SEO
4. More Secure 

SSR Components cannot
1. Listen to browser events
2. Access to browser API
3. Maintain State
5. Use Effect


Pages Created is server components by default 

Pages Router does not support server component

'use client' directive is used to convert to client component i.e it is included in JS bundle 

All the dependent component will converted to client 
component

Render the component on the server as much as possible 
and used client component when absolutely necessary

Fetch Data 

On Client 

1. useState + useEffect 
2. React Query 

Extra Roundtrip to server 

In Reactjs
Gets Blank Document
Call Backend to fetch data and render the content


Caching

Store data somewhere where it is faster to access

Memory
File System 
Network

Nextjs -> 
Data Cache based on File System
Only with fetch
By default fetch function will cache the data

{cache: 'no-store'} good where data changes frequently
{next : {revalidate : 10}} i.e background job and get freshdata every 10 sec


1. Static Rendering 
Render once at the build
Fetch build files from data cache 

2. Dynamic Rendering 
Render at each request

When build the app for production
what happens ?
When data is cached, Nextjs treat this page has 
unchanging data hence Static Rendering at build time 

When data is not cached Dynamic Rendering at request time




# Public Folder ? ? 
# Compile Time vs Runtime 
