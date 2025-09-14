import React, { useEffect } from "react";
import { useTabContext } from "../../../../contexts/Tab/TabContext";
import { Col, Row, Space } from "antd";

import boilerPic from "../../../../assets/profile.png";
import { useAuthContext } from "../../../../contexts/Auth/AuthContext";

const Profile = () => {
  const { setCurrentTab } = useTabContext();
  const { user } = useAuthContext();
  useEffect(() => {
    setCurrentTab("Profile");
  }, []);
  return (
    <div className="min-h-screen">
      <div className="w-[90%] mx-auto">
        <div className="my-20">
          <div className="rounded-2xl p-3 min-h-full ">
            <div className=" flex justify-center items-center h-full">
              <img
                src={boilerPic}
                alt="User"
                className="rounded-full md:max-h-[200px] h-full max-h-[150px] "
              />
            </div>
            <div className="flex justify-center items-center flex-col">
              <h2 className="text-xl my-1 font-semibold">
                Name: <span className="font-normal">{`${user.firstName} ${user.lastName}`}</span>
              </h2>
              <h2 className="text-xl my-1 font-semibold">
                Email: <span className="font-normal">{user.email}</span>
              </h2>
              <h2 className="text-xl my-1 font-semibold">
                Tagline: <span className="font-normal">I share words</span>
              </h2>
              <Space>
                <button className="btn-primary text-white font-bold">
                  Settings
                </button>
                <button className="btn-primary text-white font-bold">
                  Edit Profile
                </button>
              </Space>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
