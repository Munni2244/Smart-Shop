import React from "react";
import { Container } from "react-bootstrap";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './NotFound.module.css';
import { Link } from "react-router-dom";

const toolsIcon = <FontAwesomeIcon icon={faTools} />;

const NotFound = () => {
  return (
    <div>
      <Container>
        <div className={`${'text-center'} ${styles.notFound}`}>
          <p className="fs-1">{toolsIcon}</p>
          <span className="text-muted"><small>couldn't repair</small></span>
          <h1 className="fw-bold text-danger">Error 404</h1>
          <p className="text-muted">The requested URL was not found on this server.</p>
          <p>Visit <Link to="/dashboard" className={`${styles.redirUrl}`}>Dashboard</Link> until the problem is resolved.</p>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
