import React, { useState } from "react";
import { Button, Input, Steps } from "antd";
import type { RadioChangeEvent } from "antd";
import { Radio, Space } from "antd";
import { useNavigate } from "react-router-dom";

import "./UncoverYourRiskPage.scss";

const UncoverYourRiskPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);

  const [gender, setGender] = useState("");

  const onGenderChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setGender(e.target.value);
  };

  const [isExposure, setIsExposure] = useState("");
  const onExposureChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setIsExposure(e.target.value);
  };

  const [useSunscreen, setUseSunscreen] = useState("");
  const onUseSunscreenChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setUseSunscreen(e.target.value);
  };

  const [isAsbestos, setIsAsbestos] = useState("");
  const onAsbestosChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setIsAsbestos(e.target.value);
  };

  const [isSmoke, setIsSmoke] = useState("");
  const onSmokeChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setIsSmoke(e.target.value);
  };

  const [isAlcohol, setIsAlcohol] = useState("");
  const onAlcoholChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setIsAlcohol(e.target.value);
  };

  const [familyDiagnosed, setFamilyDiagnosed] = useState("");
  const onFamilyDiagnosedChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setFamilyDiagnosed(e.target.value);
  };

  const [testedGene, setTestedGene] = useState("");
  const onTestedGeneChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setTestedGene(e.target.value);
  };
  const [hasHPV, setHasHPV] = useState("");
  const onHPVChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setHasHPV(e.target.value);
  };
  const [haveCancer, setHaveCancer] = useState("");
  const onHaveCancerChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setHaveCancer(e.target.value);
  };

  return (
    <div className="uncover-your-risk-container">
      <Button type="link" href="/">
        &lt; Back to Home
      </Button>

      <Steps
        className="steps-container"
        current={step}
        // status="error"
        items={[
          {
            title: "Demographic",
            // description,
          },
          {
            title: "Environment",
            // description,
          },
          {
            title: "Lifestyle",
            // description,
          },
          {
            title: "Genetics",
          },
          {
            title: "Health history",
          },
        ]}
      />

      {step === 0 ? (
        <div className="demographic-container">
          <div className="question-container">How old are you?</div>
          <Input style={{ width: "200px", marginTop: "8px" }}></Input>

          <div className="question-container">What is your sex at birth?</div>
          <Radio.Group onChange={onGenderChange} value={gender}>
            <Space direction="vertical">
              <Radio value={"Female"}>Female</Radio>
              <Radio value={"Male"}>Male</Radio>
            </Space>
          </Radio.Group>

          <div className="question-container">What ethnicity are you?</div>
          <Input style={{ width: "200px", marginTop: "8px" }}></Input>

          <br></br>
          <Button
            style={{ marginTop: "16px" }}
            type="primary"
            onClick={() => setStep(step + 1)}
          >
            Next
          </Button>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="environment-container">
          <div className="question-container">
            Have you had intense or prolonged exposure to ionizing radiation?
          </div>
          <Radio.Group onChange={onExposureChange} value={isExposure}>
            <Space direction="vertical">
              <Radio value={"Yes"}>Yes</Radio>
              <Radio value={"No"}>No</Radio>
            </Space>
          </Radio.Group>

          <div className="question-container">
            Do you use sunscreen when you are outside
          </div>
          <Radio.Group onChange={onUseSunscreenChange} value={useSunscreen}>
            <Space direction="vertical">
              <Radio value={"Yes"}>Yes</Radio>
              <Radio value={"No"}>No</Radio>
            </Space>
          </Radio.Group>

          <div className="question-container">
            Have you worked in an environment where there is asbestos?
          </div>
          <Radio.Group onChange={onAsbestosChange} value={isAsbestos}>
            <Space direction="vertical">
              <Radio value={"Yes"}>Yes</Radio>
              <Radio value={"No"}>No</Radio>
            </Space>
          </Radio.Group>

          <div className="question-container">Where do you primarily live?</div>
          <Input style={{ width: "200px", marginTop: "8px" }}></Input>

          <div className="button-group-container">
            <Button type="default" onClick={() => setStep(step - 1)}>
              Back
            </Button>
            <Button type="primary" onClick={() => setStep(step + 1)}>
              Next
            </Button>
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="lifestyle-container">
          <div className="question-container">Do you smoke?</div>
          <Radio.Group onChange={onSmokeChange} value={isSmoke}>
            <Space direction="vertical">
              <Radio value={"Yes"}>Yes</Radio>
              <Radio value={"No"}>No</Radio>
            </Space>
          </Radio.Group>

          <div className="question-container">Do you drink alcohol?</div>
          <Radio.Group onChange={onAlcoholChange} value={isAlcohol}>
            <Space direction="vertical">
              <Radio value={"Yes"}>Yes</Radio>
              <Radio value={"No"}>No</Radio>
            </Space>
          </Radio.Group>

          <div className="question-container">
            How physically active are you?
          </div>
          <Input style={{ width: "200px", marginTop: "8px" }}></Input>

          <div className="button-group-container">
            <Button type="default" onClick={() => setStep(step - 1)}>
              Back
            </Button>
            <Button type="primary" onClick={() => setStep(step + 1)}>
              Next
            </Button>
          </div>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="genetics-container">
          <div className="question-container">
            Has any of your immediate family been diagnosed with cancer?
          </div>
          <Radio.Group
            onChange={onFamilyDiagnosedChange}
            value={familyDiagnosed}
          >
            <Space direction="vertical">
              <Radio value={"Yes"}>Yes</Radio>
              <Radio value={"No"}>No</Radio>
            </Space>
          </Radio.Group>

          <div className="question-container">
            Have you tested for genes that increase your risk of cancer?
          </div>
          <Radio.Group onChange={onTestedGeneChange} value={testedGene}>
            <Space direction="vertical">
              <Radio value={"Yes"}>Yes</Radio>
              <Radio value={"No"}>No</Radio>
            </Space>
          </Radio.Group>

          <div className="question-container">
            What types of cancer has your family been diagnosed with?
          </div>
          <Input style={{ width: "200px", marginTop: "8px" }}></Input>

          <div className="button-group-container">
            <Button type="default" onClick={() => setStep(step - 1)}>
              Back
            </Button>
            <Button type="primary" onClick={() => setStep(step + 1)}>
              Next
            </Button>
          </div>
        </div>
      ) : null}

      {step === 4 ? (
        <div className="health-history-container">
          <div className="question-container">Have you had HPV?</div>
          <Radio.Group onChange={onHPVChange} value={hasHPV}>
            <Space direction="vertical">
              <Radio value={"Yes"}>Yes</Radio>
              <Radio value={"No"}>No</Radio>
            </Space>
          </Radio.Group>

          <div className="question-container">Have you ever had cancer?</div>
          <Radio.Group onChange={onHaveCancerChange} value={haveCancer}>
            <Space direction="vertical">
              <Radio value={"Yes"}>Yes</Radio>
              <Radio value={"No"}>No</Radio>
            </Space>
          </Radio.Group>

          <div className="question-container">BMI: Weight and height</div>
          <Input style={{ width: "200px", marginTop: "8px" }}></Input>

          <div className="button-group-container">
            <Button type="default" onClick={() => setStep(step - 1)}>
              Back
            </Button>
            <Button
              type="primary"
              onClick={() => {
                console.log("submit");
                navigate("/");
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UncoverYourRiskPage;
