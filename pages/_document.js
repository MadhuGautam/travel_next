import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        debugger
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="description" content="" />
                    <meta name="author" content="" />
                    <link href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap" rel="stylesheet" />
                    <link href="/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
                    <link rel="stylesheet" href="/assets/css/fontawesome.css" />
                    <link rel="stylesheet" href="/assets/css/style.css" />
                    <link rel="stylesheet" href="/assets/css/owl.css" />
                </Head>
                <body>
                    <Main />
                    <NextScript />

                    <script src="/vendor/jquery/jquery.min.js"></script>
                    <script src="/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
                    <script src="/assets/js/custom.js"></script>
                    <script src="/assets/js/owl.js"></script>
                    <script src="/assets/js/slick.js"></script>
                    <script src="/assets/js/accordions.js"></script>

                    {/*  <script language = "text/Javascript">
      cleared[0] = cleared[1] = cleared[2] = 0; //set a cleared flag for each field
      function clearField(t){                   //declaring the array outside of the
      if(! cleared[t.id]){                      // function makes it static and global
          cleared[t.id] = 1;  // you could use true and false, but that's more typing
          t.value='';         // with more chance of typos
          t.style.color='#fff';
          }
      }
    </script> */}

                </body>
            </Html>
        )
    }
}

export default MyDocument