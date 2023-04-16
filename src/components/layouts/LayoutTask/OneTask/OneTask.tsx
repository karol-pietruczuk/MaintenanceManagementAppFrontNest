import React, { MouseEvent } from "react";
import { Td, Tr, useDisclosure } from "@chakra-ui/react";
import { useWindowSize } from "../../../../hooks/useWindowSize";
import { OneTaskOverview } from "./OneTaskOverview/OneTaskOverview";
import {TaskStatus, FindAndCountTaskResponse, ManyTasksResponse} from "types";
import './OneTask.css';

type Props = ManyTasksResponse[0]

export const OneTask = ({id, name, description, status, priority, createdAt, assignedTeam, assignedUser}: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const windowSize = useWindowSize();

  const handleOnMouseEnter = (e: MouseEvent<HTMLTableRowElement>) => {
    e.currentTarget.classList.add("task_focus");
  };

  const handleOnMouseLeave = (e: MouseEvent<HTMLTableRowElement>) => {
    e.currentTarget.classList.remove("task_focus");
  }

  return <>
    <Tr
      className="task"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
      onClick={onOpen}
    >
      <Td
        display={windowSize.width < 1200 && "table-row"}
        textAlign="center"
      >
        <p className="task_name">
          {name}
        </p>
      </Td>
      <Td
        display={windowSize.width < 1200 && "table-row"}
        textAlign="center"
      >
        <p className="task_description">
          {description}
        </p>
      </Td>
      <Td
        display={windowSize.width < 1200 && "flex"}
        textAlign="center"
      >
        {status}
      </Td>
      <Td
        display={windowSize.width < 1200 && "flex"}
        textAlign="center"
      >
        {priority}
      </Td>
      <Td
        display={windowSize.width < 1200 && "flex"}
        textAlign="center"
      >
        <p>{createdAt.toLocaleDateString()}</p>
        <p>{createdAt.toLocaleTimeString()}</p>
      </Td>
      <Td
        display={windowSize.width < 1200 && "flex"}
        textAlign="center"
      >
        <p className="task_location">
          Decanting Stanowisko 5
        </p>
      </Td>
      <Td
        display={windowSize.width < 1200 && "flex"}
        textAlign="center"
      >
        {assignedUser.map((user) => <p>{user.name + ' ' + user.surname}</p>)}
      </Td>
      <Td
        display={windowSize.width < 1200 && "flex"}
        textAlign="center"
      >
        {assignedTeam.map((team) => <p>{team.name}</p>)}
      </Td>
    </Tr>
    <OneTaskOverview isOpen={isOpen} onClose={onClose}/>
  </>
}