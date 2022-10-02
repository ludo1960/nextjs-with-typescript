import React from "react";
import {
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
  Switch,
} from "@mui/material";
import { useFormik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  Forename: yup.string().required("Forename is required"),
  Surname: yup.string().required("Surname is required"),
  Postcode: yup.string().required("City/Postcode is required"),
  // CompanyName: yup.string().required('Company Name is required'),
});

const Individuals = () => {
  const formik = useFormik({
    initialValues: {
      Forename: "",
      Surname: "",
      Postcode: "",
      
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div style={{ width: "50%", margin: "20px" }}>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        CA Member Directory
      </Typography>
      <Container maxWidth="lg">
        <form style={{ marginBottom: "10px" }} onSubmit={formik.handleSubmit}>
          <Grid>
            <Grid item sx={{ margin: "15px" }}>
              <TextField
                id="Forename-input"
                name="Forename"
                label="Forename"
                type="text"
                sx={{ width: "100%" }}
                value={formik.values.Forename}
                onChange={formik.handleChange}
                error={
                  formik.touched.Forename && Boolean(formik.errors.Forename)
                }
                helperText={formik.touched.Forename && formik.errors.Forename}
              />
            </Grid>
            <Grid item sx={{ margin: "15px" }}>
              <TextField
                id="Surname-input"
                name="Surname"
                label="Surname"
                type="text"
                sx={{ width: "100%" }}
                value={formik.values.Surname}
                onChange={formik.handleChange}
                error={formik.touched.Surname && Boolean(formik.errors.Surname)}
                helperText={formik.touched.Surname && formik.errors.Surname}
              />
            </Grid>
            <Grid item sx={{ margin: "15px" }}>
              <TextField
                id="Postcode-input"
                name="Postcode"
                label="City/Postcode"
                type="text"
                sx={{ width: "100%" }}
                value={formik.values.Postcode}
                onChange={formik.handleChange}
                error={
                  formik.touched.Postcode && Boolean(formik.errors.Postcode)
                }
                helperText={formik.touched.Postcode && formik.errors.Postcode}
              />
            </Grid>

            <Grid item sx={{ margin: "15px" }}>
              <FormControl>
                <FormControlLabel
                  control={<Switch  />}
                  label="Member holds an Insolvency Permit issued by ICAS"
                />
                <FormControlLabel
                                  control={<Switch />}
                  label="Member holds a Practising Certificate issued by ICAS"
                />
              </FormControl>
            </Grid>

            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{ paddingX: "30px", paddingY: "10px" }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
        <Divider />

        <Container>
          <div style={{ marginBottom: "10px", marginTop: "10px" }}>
            <Typography variant="h6">Data Information</Typography>
            <Typography variant="body1">
              No reproduction, copy or transmission of this data may be made
              without written permission. Further, any person, company or firm
              found to be reproducing or assisting others in reproducing mailing
              lists, or machine-readable versions derived from this publication,
              will be prosecuted for copyright infringement.
            </Typography>
          </div>
          <div className="" style={{ marginBottom: "10px", marginTop: "10px" }}>
            <Typography variant="h6">Data Protection</Typography>
            <Typography variant="body1">
              The personal data published in the directory allows ICAS to fulfil
              its legitimate interests as a professional body and regulator of
              accountants. It is also required for the performance of tasks
              which are carried out in the public interest. ICAS is fully
              committed to handling personal data in accordance with data
              protection legislation and best data protection practices. Please
              review our privacy notice for more information
            </Typography>
          </div>
        </Container>
      </Container>
    </div>
  );
};

export default Individuals;
