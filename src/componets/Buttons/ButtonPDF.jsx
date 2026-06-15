import { Fragment } from "react"
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#d11fb6",
    color: "white",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
})
export const ButtonPDF = () => {
  return (

    <Fragment>
      <PDFViewer style={styles.viewer}>
        {/* Start of the document*/}
        <Document>
          {/*render a single page*/}
          <Page size="A4" style={styles.page}>
            <View style={styles.section}>
              <Text>Hello</Text>
            </View>
            <View style={styles.section}>
              <Text>World</Text>
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </Fragment>
  )
}


{/* <PDFDownloadLink document={<YourPDFComponent data={data} />} fileName="table.pdf">
{({ blob, url, loading, error }) => (loading ? 'Carregando documento...' : 'Baixar PDF')}
</PDFDownloadLink> */}