import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

const EditStudent = () => {
  const [fid, setFid] = useState("");
  const [fname, setFname] = useState("");
  const [ay, setAy] = useState("");
  const [bat, setBat] = useState("");
  const [semno, setSemno] = useState("");
  const [sname, setSname] = useState("");
  const [scode, setScode] = useState("");
  const [pass, setPass] = useState("");
  const [cls, setCls] = useState("");
  const [sect, setSect] = useState("");
  const [nos, setNos] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/subject/${id}`);
    setFid(response.data.fid);
    setFname(response.data.fname);
    setAy(response.data.ay);
    setBat(response.data.bat);
    setSemno(response.data.semno);
    setSname(response.data.sname);
    setScode(response.data.scode);
    setPass(response.data.pass);
    setCls(response.data.cls);
    setSect(response.data.sect);
    setNos(response.data.nos);



  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/subject/${id}`, {
        fid,
        fname,
        ay,
        bat,
        semno,
        sname,
        scode,
        pass,
        cls,
        sect,
        nos,
      });
      alert("Subject Data Updated")
      navigate("/subject");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Sidebar>
    <div className="columns mt-5">
      <div className="column is-half">
        <form onSubmit={updateUser}>
        <div className="field">
              <label className="label">Faculty ID</label>
              <div className="control">
                <input
                  type="number"
                  className="input"
                  value={fid}
                  onChange={(e) => setFid(e.target.value)}
                  placeholder="Faculty ID" required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Faculty Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={fname}
                  onChange={(e) => setFname(e.target.value)}
                  placeholder="Faculty Name" required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Academic Year</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={ay}
                  onChange={(e) => setAy(e.target.value)}
                  placeholder="Academic Year" required
                />
              </div>
            </div>

            <div className="field">
              <label className="label">Batch</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={bat}
                  onChange={(e) => setBat(e.target.value)}
                  placeholder="Batch" required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Semester Number</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={semno}
                  onChange={(e) => setSemno(e.target.value)}
                  placeholder="Semester Number" required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Subject Name</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={sname}
                  onChange={(e) => setSname(e.target.value)}
                  placeholder="Subject Name" required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Subject Code</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={scode}
                  onChange={(e) => setScode(e.target.value)}
                  placeholder="Subject Code" required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Pass Percentage %</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  placeholder="Pass Percentage %" required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Class</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={cls}
                  onChange={(e) => setCls(e.target.value)}
                  placeholder="Class" required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">Section</label>
              <div className="control">
                <input
                  type="text"
                  className="input"
                  value={sect}
                  onChange={(e) => setSect(e.target.value)}
                  placeholder="Section" required
                />
              </div>
            </div>
            <div className="field">
              <label className="label">No.of Students</label>
              <div className="control">
                <input
                  type="number"
                  className="input"
                  value={nos}
                  onChange={(e) => setNos(e.target.value)}
                  placeholder="No.of Students" required
                />
              </div>
            </div>
          <div className="field">
            <div className="control">
              <button type="submit" className="button is-success">
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </Sidebar>
  );
};

export default EditStudent;