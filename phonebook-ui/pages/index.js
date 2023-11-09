
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await axios.get('http://localhost:3000/api/users', {
      headers: {
        "api-key": "apimajor123"
      }
    })
    setUsers(response.data);
  };


  const fetchPhoneNumbers = async (userId,userName) => {
    const response = await axios.get(`http://localhost:3000/api/users/${userId}/phone_numbers`, {
      headers: {
        "api-key": "apimajor123"
      }
    })
    response.data.userName = userName;
    document.getElementById("table_main_div").style.filter="blur(3px)"
    setSelectedUser(response.data);
  };

  const closeModal = () => {
    document.getElementById("table_main_div").style.filter="blur(0px)"
    setSelectedUser(null);
  };

  return (
    <div className="main_div">

      

      {selectedUser && (
          <div className="modal_div">
            <img src="images/excluir.png" onClick={closeModal}></img>
            <h2>{selectedUser.userName}</h2>
            <table>
              <tbody>
                <tr>
                  <th>Números de telefone:</th>
                </tr>
                
                  {selectedUser.map((phoneNumber) => (
                    <tr>
                      <td key={phoneNumber.id}>{phoneNumber.number}</td>
                    </tr>
                  ))}
                
              </tbody>
            </table>

            <style jsx>{`
        
              .modal_div{
                position: absolute;
                width:30vw;
                max-height: 30vh;
                margin:24vh auto 0 35vw;
                border: 1px solid black;
                z-index: 101;
                overflow: auto;
                background-color: white;
                background-image: linear-gradient(to right, #00ffc8, #00e6b5, #00cda1, #00b58f, #019d7c);
                padding-bottom: 2vh;
                color: white;
              }
            `}</style>

            <style jsx global>{`

              img {
                width: 0.7vw;
                margin: 0.7vw 0.7vw;
                float: right;
                cursor: pointer;
              }
            `}</style>
          
          </div>
      )}


      <div className="table_main_div" id="table_main_div">
        <table className="main_div_table">
          <tbody>
            <tr>
              <th>Lista telefonica</th>
            </tr>
            
              {users.map((user) => (
                <tr>
                  <td onClick={() => fetchPhoneNumbers(user.id,user.name)} key={user.id}>
                    {user.name}{' '}
                  </td>
                </tr>
              ))}
            
          </tbody>
        </table>
        

        <style jsx>{`

          .table_main_div{
            width:80%;
            margin: 10vh auto 0 auto;
            background-image: linear-gradient(to right, #00ffc8, #00e6b5, #00cda1, #00b58f, #019d7c);
            box-shadow: 10px 11px 20px 9px #00000024;
            padding-bottom: 2vh;
          }

          
          .main_div_table {
            width:100%;
            
          }

          .main_div_table tr td {
            cursor:pointer;
          }
        `}</style>

        <style jsx global>{`
          body{
            margin: 0;
            padding: 0;
            border-collapse: collapse;
            font-family:calibri;
            background-image: linear-gradient(to left top, #d8f2fd, #d1effd, #cbebfe, #c5e8fe, #c0e4ff);
            background-repeat: no-repeat;
            height: 100vh;
            display: flow-root;
          }
          h1 {
            width: 100%;
            text-align: center;
          }
          h2 {
            width: 100%;
            text-align: center;
          }
          table {
            border-collapse: collapse;
            margin: 0 auto;
            width:80% !important;
            text-align: center;
            margin-bottom: 1vh;
            text-transform: uppercase;
          }

          table tr:first-of-type{
            font-size: 1.5em;
            height: 8vh;
            border-bottom: 1px solid #ffffff85;
            cursor: auto;
          }
          table tr{
            height: 5vh;
            color:white;
            
            cursor: pointer;
          }
          table td{
            padding: 15px;
            border-bottom: 1px solid #ffffff85;
            background-color: none;
            transition-duration: 1000ms;
          }
          table td:hover{
            padding: 15px;
            background-color: #00000029;
            border-bottom: 1px solid #00000029;
          }
        `}</style>

      </div>


      
      
    </div>      
    
  );
};

export default Home;
