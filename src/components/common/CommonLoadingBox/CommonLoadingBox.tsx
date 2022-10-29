import React, { useEffect, useState } from "react";
import { Spinner } from "@chakra-ui/react";
import { asyncTimeout } from "../../../utils/accessoryFunctions";
import './CommonLoadingBox.css';

interface Props {
  loading: boolean;
  visible: boolean;
  setVisible: (opacity: boolean) => void;
}

export const CommonLoadingBox = ({loading, visible, setVisible}: Props) => {
  const [opacity, setOpacity] = useState(false);

  useEffect(() => {
    setOpacity(visible);
  },[visible])

  useEffect(() => {
    if (loading) {
      setVisible(loading);
    } else {
      setOpacity(loading);
      (async () => {
        await asyncTimeout(500)
        setVisible(loading)
      })()
    }
  },[loading]);

  return loading || visible ? <div className={'common-loading-box'} style={opacity ? {opacity: 1} : {opacity: 0}}>
    <Spinner label={"logging in ..."} speed='0.6s'/>
    <p>logging in...</p>
  </div> : null;
};