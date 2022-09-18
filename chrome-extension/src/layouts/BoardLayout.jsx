import {
  Box,
  Button,
  Tab,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  TabList,
} from "@chakra-ui/react";
import React from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import MainBoard from "../components/MainBoard";
import Navbar from "../components/Navbar";
import Send from "../components/Send";
import Settings from "../components/Settings";

function BoardLayout() {
  const [selectedId, setSelectedId] = useState(1);
  const handleSelectedId = useCallback(
    (id) => {
      setSelectedId(id);
    },
    [selectedId]
  );

  return (
    <Tabs>
      <TabList>
        <Tab>Board</Tab>
        <Tab>Send</Tab>
        <Tab>Settings</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <MainBoard />
        </TabPanel>
        <TabPanel>
          <Send />
        </TabPanel>
        <TabPanel>
          <Settings />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default BoardLayout;
