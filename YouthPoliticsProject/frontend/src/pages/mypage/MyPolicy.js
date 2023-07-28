import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const MyPolicy = () => {
    return (
        <div>
            <p>정책목록</p>
              {/* <Box sx={{ width: 'inherit', typography: 'body1' }}>
            <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>

            <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Map" value="1" />
            <Tab label="Review" value="2" />
            {/* <Tab label="Item Three" value="3" /> */}

           {/*</TabList>
            </Box>
        
            <TabPanel value="1">
               
            </TabPanel> */}
            {/* <TabPanel value="2" sx={{overflow:'scroll',overflowX:'hidden',padding:'0'}}> */}
            {/* </TabPanel>
            </TabContext>
            </Box> */}
        </div>
    );
};

export default MyPolicy;