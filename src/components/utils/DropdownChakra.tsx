import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  IconButton,
  Radio,
  RadioGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";

interface DropdownChakraProps {
  radioValue: string;
  setRadioValue: React.Dispatch<React.SetStateAction<string>>;
}

export const DropdownChakra: React.FC<DropdownChakraProps> = ({
  radioValue,
  setRadioValue,
}) => {
  const [toggleView, setTogleView] = useState(false);

  const togleState = () => {
    setTogleView(toggleView === false ? true : false);
  };

  return (
    <Box>
      <IconButton
        mt="17"
        mb="2"
        ml="2.5"
        variant="ghost"
        aria-label="Filter"
        icon={<HamburgerIcon />}
        onClick={togleState}
      />
      <Flex shadow="md" borderWidth="thin" borderRadius="lg" mb="4">
        {toggleView ? (
          <RadioGroup
            onChange={setRadioValue}
            value={radioValue}
            my="5"
            ml="15"
          >
            <Stack direction="column">
              <Text>Sort By:</Text>
              <Radio value="ASC">Ascending</Radio>
              <Radio value="DESC">Descending</Radio>
            </Stack>
          </RadioGroup>
        ) : null}
      </Flex>
    </Box>
  );
};
