import Head from 'next/head';
const Header = () => {
  return (
    <Head>
      <title>Infosel</title>
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
      />
      <link
        rel='stylesheet'
        href='https://fonts.googleapis.com/icon?family=Material+Icons'
      />
      <script src='https://www.amcharts.com/lib/4/core.js'></script>
      <script src='https://www.amcharts.com/lib/4/charts.js'></script>
      <script src='https://www.amcharts.com/lib/4/themes/animated.js'></script>
    </Head>
  );
};

export default Header;
