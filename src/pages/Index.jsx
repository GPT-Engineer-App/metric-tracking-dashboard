import { Box, Flex, Text, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, SimpleGrid, Image } from "@chakra-ui/react";
import { FaDollarSign, FaShoppingCart, FaUsers, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Box p={5}>
      <Flex justifyContent="space-between" alignItems="center" mb={10}>
        <Text fontSize="2xl" fontWeight="bold">
          Business Dashboard
        </Text>
        <Image src="https://images.unsplash.com/photo-1590102426319-c7526718cd70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGxvZ298ZW58MHx8fHwxNzE0NjY4NDUwfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="full" boxSize="50px" />
      </Flex>
      <SimpleGrid columns={4} spacing={10}>
        <StatBox icon={FaDollarSign} title="Revenue" amount="$30K" percentage={5.4} />
        <StatBox icon={FaShoppingCart} title="Sales" amount="1.4K" percentage={3.8} />
        <StatBox icon={FaUsers} title="Customers" amount="850" percentage={2.5} />
        <StatBox icon={FaChartLine} title="Growth" amount="7.2%" percentage={4.1} />
      </SimpleGrid>
    </Box>
  );
};

const StatBox = ({ icon: Icon, title, amount, percentage }) => (
  <Stat p={5} shadow="md" border="1px" borderColor="gray.200" borderRadius="md">
    <Flex alignItems="center">
      <Icon size="3em" />
      <Box ml={3}>
        <StatLabel fontWeight="medium">{title}</StatLabel>
        <StatNumber fontSize="2xl">{amount}</StatNumber>
        <StatHelpText>
          <StatArrow type={percentage > 0 ? "increase" : "decrease"} />
          {Math.abs(percentage)}%
        </StatHelpText>
      </Box>
    </Flex>
  </Stat>
);

export default Index;
