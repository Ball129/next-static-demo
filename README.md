## Note for Export Static HTML (upto my experience)

- Cannot use next/image component. (Unless deploy on vercel)
- Cannot use getServerSideProps.
- Cannot use dynamic routes like [title].js , but can make template while all routes must be in getStaticPaths (see dynamic/[title].js)

## To export

- yarn build (next build && next export)
- get result in ./out

## Ref
https://medium.com/codesxdiary/ลองทำ-static-site-generator-ด้วย-next-js-7223450bffa