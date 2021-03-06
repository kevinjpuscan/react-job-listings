import React from "react";
import styled from "styled-components";
import Feature from "./feature";
import Tag from "./tag";

export const CardStyled = styled.div`
  background: white;
  min-height: 255px;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.05);
  margin-top: 3em;

  .line-card {
    height: 255px;
    width: 0px;
    border-left: 5px solid var(--dark-cyan);
  }

  .content-card {
    padding: 2.5em 1.5em 1.5em 1.5em;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  .category {
    font-size: 0.9em;
    color: var(--dark-cyan);
    font-weight: 700;
  }
  .feactures span {
    margin-right: 1em;
  }

  .description {
    padding: 1em 0px;
    color: var(--gray);
    border-bottom: 1px solid var(--gray);

    span {
      font-size: 0.9em;
      margin-right: 2em;
      position: relative;
    }
  }

  .title {
    font-weight: 700;
    margin-top: 15px;
    cursor: pointer;
    color: var(--very-dark-gray);
    :hover {
      color: var(--dark-cyan);
    }
  }
  .tags-content {
    margin: 0;
    span {
      margin: 1em 1em 0 0;
      display: inline-flex;
    }
  }

  .img-icon {
    width: 50px;
    height: 50px;
    border-radius: 50px;
    position: absolute;
    margin-top: -65px;
    overflow: hidden;
    img {
      width: 50px;
    }
  }

  .points {
    ::after {
      content: "";
      display: block;
      width: 5px;
      height: 5px;
      border-radius: 5px;
      background: var(--gray);
      position: absolute;
      top: 0;
      bottom: 0;
      left: -1em;
      margin: auto;
    }
    ::before {
      content: "";
      display: block;
      width: 5px;
      height: 5px;
      border-radius: 5px;
      background: var(--gray);
      position: absolute;
      top: 0;
      bottom: 0;
      right: -1em;
      margin: auto;
    }
  }

  @media (min-width: 800px) {
    min-height: auto;
    margin-top: 1.5em;
    .line-card {
      height: auto;
    }
    .content-card {
      padding: 1.5em 2.5em;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    .img-icon {
      width: 80px;
      height: 80px;
      border-radius: 80px;
      position: relative;
      margin-top: 0px;
      overflow: hidden;
      margin-right: 1.5em;
      img {
        width: 80px;
      }
    }

    .description {
      border: none;
    }
    .detail-card {
      margin-top: 1em;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .header-tab {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
    }
  }
`;
function Card({ el, image }) {
  return (
    <CardStyled>
      <div className="line-card"></div>
      <div className="content-card">
        <div className="header-tab">
          <div className="img-icon">
            <img src={image} alt={el.company}></img>
          </div>

          <div className="detail-card">
            <div className="feactures">
              <span className="category">{el.company}</span>
              {el.new && <Feature typeFeature="new" text="NEW!" />}
              {el.featured && (
                <Feature typeFeature="featured" text="FEATURED" />
              )}
            </div>

            <div className="title">{el.position}</div>

            <div className="description">
              <span className="description-detail">{el.postedAt}</span>
              <span className="description-detail points">{el.contract}</span>
              <span className="description-detail">{el.location}</span>
            </div>
          </div>
        </div>

        <p className="tags-content">
          <Tag key="role">{el.role}</Tag>
          <Tag key="lvl">{el.level}</Tag>
          {el.languages.map((lang, idx) => (
            <Tag key={idx + "l"}>{lang}</Tag>
          ))}
          {el.tools.map((tool, idx) => (
            <Tag key={idx + "t"}>{tool}</Tag>
          ))}
        </p>
      </div>
    </CardStyled>
  );
}

export default Card;
