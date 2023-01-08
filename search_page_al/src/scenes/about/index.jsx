import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" marginLeft="18rem">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Our Team" subtitle="We are team BitLock" />
      </Box>
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >

        

        {/* ROW 1 */}
        {/* <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box> */}
        
      
        {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based Traffic
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box> */}
        <Box
          gridColumn="span 5"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginLeft="6rem"
        >
          <Box display="flex" justifyContent="center" alignItems="center">
      <img
        alt="profile-user"
        width="150px"
        height="150px"
        src="https://avatars.githubusercontent.com/u/92233367?v=4"
        style={{ cursor: "pointer", borderRadius: "50%" }}
      />
      <Box textAlign="center">
        <Typography
            variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
             sx={{ m: "10px 0 0 0" }}
          >
                  RUDRANSH BANSAL
                </Typography>
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  ML+NLP Developer
                </Typography>
                <br/>
                  <a href="https://github.com/rudranshbansal">
                <img
                alt="profile-user"
                width="30px"
                height="30px"
                color={colors.grey[100]}
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                style={{ cursor: "pointer", borderRadius: "50%" }}
                />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/rudransh-bansal-515907210/">
                <img
                alt="profile-user"
                width="30px"
                height="30px"
                src="https://cdn-icons-png.flaticon.com/512/61/61109.png?w=360"
                style={{ cursor: "pointer", }}
                />
                </a>
  

              </Box>
    </Box>
          {/* <StatBox
            title="Rudransh Bansal"
            subtitle="ML Developer + NLP Expert"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          
          /> */}
        </Box>

        <Box
          gridColumn="span 5"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginLeft="6rem"
        >
          <Box display="flex" justifyContent="center" alignItems="center">
      <img
        alt="profile-user"
        width="150px"
        height="150px"
        src="https://media.licdn.com/dms/image/C5603AQF4pdHjtRBzXw/profile-displayphoto-shrink_800_800/0/1654715843739?e=1678320000&v=beta&t=VZlSBQwmFSCNzsxJWMWsBtQXqAEUjDJ-PrkHOxEKJOw"
        style={{ cursor: "pointer", borderRadius: "50%" }}
      />
      <Box textAlign="center">
        <Typography
            variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
             sx={{ m: "10px 0 0 0" }}
          >
                  KARTIK SRIVASTAVA
                </Typography>
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  ML Developer
                </Typography>
                <br/>
                  <a href="https://github.com/rudranshbansal">
                <img
                alt="profile-user"
                width="30px"
                height="30px"
                color={colors.grey[100]}
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                style={{ cursor: "pointer", borderRadius: "50%" }}
                />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/kartik-srivastava-7649ab188/">
                <img
                alt="profile-user"
                width="30px"
                height="30px"
                src="https://cdn-icons-png.flaticon.com/512/61/61109.png?w=360"
                style={{ cursor: "pointer", }}
                />
                </a>
              </Box>
    </Box>
        </Box>

        <Box
          gridColumn="span 5"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginLeft="6rem"
        >
          <Box display="flex" justifyContent="center" alignItems="center">
      <img
        alt="profile-user"
        width="150px"
        height="150px"
        src="data:image/jpeg;base64,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"
        style={{ cursor: "pointer", borderRadius: "50%" }}
      />
      <Box textAlign="center">
        <Typography
            variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
             sx={{ m: "10px 0 0 0" }}
          >
                  CHAYAN &nbsp;SINHA
                </Typography>
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Frontend Developer
                </Typography>
                <br/>
                  <a href="https://github.com/csinha134">
                <img
                alt="profile-user"
                width="30px"
                height="30px"
                color={colors.grey[100]}
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                style={{ cursor: "pointer", borderRadius: "50%" }}
                />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/chayan-sinha-647957173/">
                <img
                alt="profile-user"
                width="30px"
                height="30px"
                src="https://cdn-icons-png.flaticon.com/512/61/61109.png?w=360"
                style={{ cursor: "pointer", }}
                />
                </a>
              </Box>
    </Box>

          
        </Box>

        <Box
          gridColumn="span 5"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          marginLeft="6rem"
        >
        <Box display="flex" justifyContent="center" alignItems="center">
      <img
        alt="profile-user"
        width="150px"
        height="150px"
        src="https://media.licdn.com/dms/image/C4D03AQFBMAcZgBXOPA/profile-displayphoto-shrink_800_800/0/1663833013979?e=1678320000&v=beta&t=UEVn_fpukWLE0UiyN_doTKUEy8fK540rh_FxBGwrq9c"
        style={{ cursor: "pointer", borderRadius: "50%" }}
      />
      <Box textAlign="center">
        <Typography
            variant="h2"
            color={colors.grey[100]}
            fontWeight="bold"
             sx={{ m: "10px 0 0 0" }}
          >
                  ARJUN DHAWAN
                </Typography>
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Backend Developer
                </Typography>
                <br/>
                  <a href="https://github.com/arjundvn24">
                <img
                alt="profile-user"
                width="30px"
                height="30px"
                color={colors.grey[100]}
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                style={{ cursor: "pointer", borderRadius: "50%" }}
                />
                </a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com/in/arjun-dhawan-2002/">
                <img
                alt="profile-user"
                width="30px"
                height="30px"
                src="https://cdn-icons-png.flaticon.com/512/61/61109.png?w=360"
                style={{ cursor: "pointer", }}
                />
                </a>
              </Box>
       </Box>
      </Box>
      </Box>
      <h1>Our Solution ✅ </h1>
      <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="20px"
        >Our Web application can easily search google for news articles mentioning a given name and collect resulting articles using Scrapy/Beautiful Soup Selenium and DeathByCaptcha.

        Then we apply NLP techniques like bigrams, Part-of-speech tagging and named entity recognition using NLTK, polyglot etc. to extract relevant passages and gather their sentiment analysis along with testing and validating the results to make them as accurate as possible.
        
        Finally all these results would be stored in a huge database which can be easily queried using api calls.
        </Box>

        <h1>What the user gets 💻 :</h1>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="20px"
        >Any user can access our website to input a name through a user-friendly interface to view the resulting-related news articles and their associated context and sentiment along with visualization of results in the form of graphs like change of sentiment related to the person with time,  etc.

        Users will also be empowered with features like search autocomplete , filter results by time or location, sort results by sentiment or date and efficient prediction regarding change in sentiment using deep learning(time series models).
        
        </Box>
        <br/>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="20px"
        >For the sentiment analysis of the news we can use n-grams (Bi-grams/Trigrams) to investigate combinations of two words or three words, i.e., Bigrams/Trigrams. An n-gram is a contiguous sequence of n items from a given sample of text or speech.

        The queried results will be stored and managed in a large database for efficient caching.
        
        Our product can be used by big companies and celebrities for brand monitoring and reputation management and for market and competitive research.
        
        It can also be used by prospective employers for background checks of their employees,by visa-granting authorities, banks,election commissions  and other government or private institutions.
        
        
        </Box>
        <h1>Our Workflow </h1>
      <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="20px"
        >
          <img src="https://drive.google.com/file/d/1lpP2NlSettgYgmnjZmQNS6bXMxZs_H2-/view?usp=sharing"/>
        </Box>
    </Box>

    
    
    
      
  );
};

export default Dashboard;
