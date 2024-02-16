import React, { useEffect, useState } from "react";
import BlockView from "./BlockView";
import axios from "axios";
import { PlusLg } from "react-bootstrap-icons";

export default function MainView() {
  const [adminData, setAdminData] = useState([]);
  const [memberData, setMemberData] = useState([]);

  const getData = async () => {
    const data = await axios.get(
      "https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098"
    );
    let admins = [];
    let members = [];
    if (data.status === 200) {
      admins = data.data.filter((item) => {
        return item.role === "admin";
      });

      members = data.data.filter((item) => {
        return item.role === "admin";
      });
    }
    setAdminData([...admins]);
    setMemberData([...members]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div
      style={{
        overflow: "auto",
        width: "100%",
        height: "100vh",
        position: "fixed",
        paddingBottom: "6vh",
      }}
    >
      {adminData && adminData.length > 1 && (
        <BlockView role="Administrator" data={adminData} />
      )}
      {memberData && memberData.length > 1 && (
        <BlockView role="Members" data={memberData} />
      )}
      <div
        style={{
          position: "fixed",
          bottom: "40px",
          right: "50px",
          zIndex: "2", // Ensure the button appears above the data
        }}
      >
        <div
          role="button"
          onClick={() => {}}
          style={{
            height: "70px",
            width: "70px",
            borderRadius: "50%",
            backgroundColor: "#84a3f6",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <PlusLg size={30} />
        </div>
      </div>
    </div>
  );
}
