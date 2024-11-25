import React from 'react'

const Info = ({ date, minTemp, maxTemp, pressure, humidity }) => {
    return (
      <div className="">
        <table className="tableContainer">
          <thead>
            <tr>
              <th style={{ backgroundColor: '#FF6600' }}>Date: {date}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ backgroundColor: '#CCCCCC', fontWeight: 'bold' }}>
                Temperature
              </td>
            </tr>
            <tr>
              <td>
                <table className="nestedTable" style={{ backgroundColor: '#CCCCCC' }}>
                  <tbody>
                    <tr>
                      <td>Min</td>
                      <td>Max</td>
                    </tr>
                    <tr>
                      <td>{minTemp}</td>
                      <td>{maxTemp}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table className="nestedTable">
                  <tbody>
                    <tr>
                      <td>Pressure</td>
                      <td>{pressure}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>
                <table className="nestedTable">
                  <tbody>
                    <tr>
                      <td>Humidity</td>
                      <td>{humidity}</td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
export default Info