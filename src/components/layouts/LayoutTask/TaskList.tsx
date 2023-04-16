import React from "react";
import { Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  TableContainer
} from "@chakra-ui/react";
import { OneTask } from "./OneTask/OneTask";
import { useWindowSize } from "../../../hooks/useWindowSize";
import {TaskStatus, TaskPriority, AssignedUserResponse} from "types";

export const TaskList = () => {
  const windowSize = useWindowSize();
  return <Box
      ml={{ base: 0, md: 60 }}
      p="4"
      minHeight="81vh"
    >

    <TableContainer>
      <Table variant='simple'>
        { windowSize.width >= 1200 ?
            <Thead>
              <Tr>
                <Th textAlign="center">Name</Th>
                <Th textAlign="center">Description</Th>
                <Th textAlign="center">Status</Th>
                <Th textAlign="center">Priority</Th>
                <Th textAlign="center">Created at</Th>
                <Th textAlign="center">Location</Th>
                <Th textAlign="center">User</Th>
                <Th textAlign="center">Team</Th>
              </Tr>
            </Thead> :
            null
        }

        <Tbody>
          <OneTask
            id="hash123123123"
            name="Robot grader fault! Robot grader fault! Robot grader fault! Robot grader fault! Robot grader fault! Robot grader fault! Robot grader fault!"
            description="During work robot after start in 5 minutes robot immediately not catching pork."
            status={TaskStatus.Reported}
            priority={TaskPriority.High}
            assignedUser={[{name: 'Jan', surname: 'Kowalski', id: 'hashdwef', assignedTeam: [{name: "Brygada B", id: "hasd12312ed"}]}]}
            assignedTeam={[{name: "Brygada B", id: "hasd12312ed"}]}
            createdAt={new Date()}
          />
        </Tbody>
      </Table>
    </TableContainer>

    </Box>
}