/* eslint-disable jsx-a11y/alt-text */
import {
  Document,
  Font,
  Image,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import React from 'react';
import Html from 'react-pdf-html';
import { HtmlProps } from 'react-pdf-html/dist/Html';
import { getFullName } from '../../helpers/utils';
import { ResumePageProps } from '../../pages';
import colors from '../../strum-design-system/themes/timbre/colors';
import spacers from '../../strum-design-system/themes/timbre/spacers';
import UnorderedList from '../../strum-design-system/components/Nav/UnorderedList';

const domain = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';
const fontPath = `${domain}/fonts/SourceSansPro`;
const iconPath = `${domain}/pdf/fa-icons`;

Font.register({
  family: 'Source Sans Pro',
  fonts: [
    {
      fontStyle: 'normal',
      fontWeight: 400,
      src: `${fontPath}/SourceSansPro-Regular.ttf`,
    },
    {
      fontStyle: 'italic',
      fontWeight: 400,
      src: `${fontPath}/SourceSansPro-Italic.ttf`,
    },
    {
      fontStyle: 'normal',
      fontWeight: 700,
      src: `${fontPath}/SourceSansPro-Bold.ttf`,
    },
    {
      fontStyle: 'italic',
      fontWeight: 700,
      src: `${fontPath}/SourceSansPro-BoldItalic.ttf`,
    },
  ],
});

const sidebarWidth = 2.75;
const fontSizes = {
  xl: 20,
  l: 18,
  m: 16,
  s: 14,
  xs: 12,
  xxs: 10,
};

// @ts-ignore
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingLeft: 0,
  },
  page: {
    alignItems: 'stretch',
    backgroundColor: colors.white,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    fontFamily: 'Source Sans Pro',
    fontSize: fontSizes.xxs,
    justifyContent: 'flex-start',
    lineHeight: 1.3,
  },
  sidebar: {
    alignSelf: 'stretch',
    backgroundColor: colors.light,
    display: 'flex',
    color: colors.dark,
    flexBasis: `${sidebarWidth}in`,
    flexDirection: 'column',
    flexGrow: 0,
    flexShrink: 1,
  },
  sidebarContent: { padding: spacers[4] },
  header: {
    backgroundColor: colors.primary,
    color: colors.white,
    padding: `${spacers[6]} ${spacers[4]}`,
    textAlign: 'center',
  },
  headerTitle: { fontSize: fontSizes.xl, fontWeight: 700 },
  headerSubtitle: { fontSize: fontSizes.l, fontWeight: 700 },
  main: {
    alignSelf: 'stretch',
    display: 'flex',
    flexBasis: 'auto',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 0,
    padding: spacers[4],
  },
  section: { marginBottom: spacers[4] },
  sectionHeading: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    fontSize: fontSizes.m,
    fontWeight: 700,
  },
  sectionHeadingNonHTML: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    fontSize: fontSizes.m,
    fontWeight: 700,
    marginBottom: spacers[1],
  },
  sectionHeadingIcon: {
    height: fontSizes.m,
    marginRight: spacers[1],
    width: fontSizes.m,
  },
  sectionHeadingStars: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginRight: spacers[1],
  },
  sectionHeadingStar: {
    height: fontSizes.xxs,
    width: 'auto',
  },
  sectionParagraph: { fontWeight: 400, margin: 0 },
  itemHeading: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    fontSize: fontSizes.xs,
    fontWeight: 700,
    marginBottom: spacers[1],
    marginTop: spacers[3],
  },
  itemSubheadingRow: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: spacers[1],
  },
  itemSubheading: {
    fontSize: fontSizes.xxs,
    fontStyle: 'italic',
  },
  itemSubheadingIcon: {
    height: fontSizes.xxs,
    marginRight: spacers[1],
  },
  professionalTitle: {
    backgroundColor: colors.dark,
    borderRadius: '3px',
    color: colors.white,
    fontWeight: 700,
    paddingHorizontal: spacers[1],
  },
  bold: { fontWeight: 700 },
  italics: { fontStyle: 'italic' },
  flexColumn: { display: 'flex', flexDirection: 'column' },
  flexRow: { alignItems: 'center', display: 'flex', flexDirection: 'row' },
  flexRowAlignStart: {
    alignItems: 'flex-start',
    display: 'flex',
    flexDirection: 'row',
  },
  a: {
    color: colors.primary,
    textDecoration: 'underline',
  },
  listContainer: {
    flexDirection: 'column',
    //@ts-ignore
    marginStart: '10',
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bulletPoint: {
    //@ts-ignore
    marginStart: '10',
  },
  listItem: {
    //@ts-ignore
    marginStart: '10',
  },
});

const htmlProps: Omit<HtmlProps, 'children'> = {
  style: { fontSize: fontSizes.xxs },
  stylesheet: {
    a: styles.a,
    p: styles.sectionParagraph,
  },
};

const PDF: React.FC<ResumePageProps> = (props) => {
  const {
    certs,
    education,
    // hobbies,
    personalInformation,
    // privateInformation,
    professional,
    skills,
  } = props;
  const fullName = getFullName(personalInformation);
  const year = new Date().getFullYear();

  return (
    // @ts-ignore
    <Document author={fullName} title={`Résume for ${fullName}, ${year}`}>
      {/* @ts-ignore */}
      <Page size="LETTER" style={styles.page}>
        <View style={styles.sidebar}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{fullName}</Text>
            <Text style={styles.headerSubtitle}>
              {personalInformation.attributes.title}
            </Text>
          </View>
          <View style={styles.sidebarContent}>
            <View style={styles.section}>
              <View style={styles.sectionHeadingNonHTML}>
                <Image
                  src={`${iconPath}/circle-user.png`}
                  style={styles.sectionHeadingIcon}
                />
                <Text>About Me</Text>
              </View>
              <Html {...htmlProps}>{personalInformation.html}</Html>
            </View>
            <View style={styles.section}>
              <View style={styles.sectionHeadingNonHTML}>
                <Image
                  src={`${iconPath}/circle-id-card.png`}
                  style={styles.sectionHeadingIcon}
                />
                <Text>Contact Information</Text>
              </View>
              <View style={styles.flexRow}>
                <Text style={styles.bold}>Location:</Text>
                <Text>&nbsp;{personalInformation.attributes.location}</Text>
              </View>
              {/*TODO fix the email hyperlink rendering issue then uncomment this */}
              {/*{privateInformation?.map((privateField) => (*/}
              {/*  <View key={privateField.slug} style={styles.flexRowAlignStart}>*/}
              {/*    {privateField.attributes.label === 'Email'*/}
              {/*        ?*/}
              {/*        <>*/}
              {/*          <View style={styles.flexRow}>*/}
              {/*            <Text style={styles.bold}>*/}
              {/*              {privateField.attributes.label}:&nbsp;*/}
              {/*            </Text>*/}
              {/*          </View>*/}
              {/*          <Html*/}
              {/*              {...htmlProps}>{privateField.html}*/}
              {/*          </Html>*/}
              {/*        </>*/}
              {/*        :*/}
              {/*        privateField.attributes.label !== 'Address'*/}
              {/*            ?*/}
              {/*            <>*/}
              {/*              <View style={styles.flexRow}>*/}
              {/*                <Text style={styles.bold}>*/}
              {/*                  {privateField.attributes.label}:&nbsp;*/}
              {/*                </Text>*/}
              {/*              </View>*/}
              {/*              <Html*/}
              {/*                  {...htmlProps}>{privateField.html}*/}
              {/*              </Html>*/}
              {/*            </>*/}

              {/*            : null*/}
              {/*    }*/}
              {/*    /!*<Html {...htmlProps}>{privateField.html}</Html>*!/*/}
              {/*  </View>*/}
              {/*))}*/}
            </View>
            <View style={styles.section}>
              <View style={styles.sectionHeading}>
                <Image
                  src={`${iconPath}/circle-checkmark.png`}
                  style={styles.sectionHeadingIcon}
                />
                <Text>Skills &amp; Expertise</Text>
              </View>
              {skills.map((skill, skillIndex) => (
                <View key={skill.slug}>
                  <View style={styles.itemHeading}>
                    <View style={styles.sectionHeadingStars}>
                      {Array.from(Array(skills.length - skillIndex)).map(
                        (star, starIndex) => (
                          <Image
                            key={starIndex}
                            src={`${iconPath}/star.png`}
                            style={styles.sectionHeadingStar}
                          />
                        ),
                      )}
                    </View>
                    <Text style={styles.bold}>{skill.attributes.title}</Text>
                  </View>
                  <Html {...htmlProps}>{skill.html}</Html>
                </View>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <Image
                src={`${iconPath}/circle-briefcase.png`}
                style={styles.sectionHeadingIcon}
              />
              <Text>Professional Experience</Text>
            </View>
            {professional.map((professionalExperience) => (
              <View key={professionalExperience.slug}>
                <View style={styles.itemHeading}>
                  <Text style={styles.professionalTitle}>
                    {professionalExperience.attributes.title}
                  </Text>
                  <Text>
                    &nbsp;at {professionalExperience.attributes.organization}
                  </Text>
                </View>
                <View style={styles.itemSubheadingRow}>
                  <Image
                    src={`${iconPath}/calendar.png`}
                    style={styles.itemSubheadingIcon}
                  />
                  <Text style={styles.itemSubheading}>
                    {professionalExperience.attributes.startDate}—
                    {professionalExperience.attributes.endDate
                      ? professionalExperience.attributes.endDate
                      : 'Current'}
                  </Text>
                </View>
                <View style={styles.listContainer}>
                  {professionalExperience.attributes.pdfHighlight1 ? (
                    <>
                      <View style={styles.listItemContainer}>
                        <Text style={styles.bulletPoint}>• </Text>
                        <Text style={styles.listItem}>
                          {professionalExperience.attributes.pdfHighlight1}
                        </Text>
                      </View>
                    </>
                  ) : null}
                  {professionalExperience.attributes.pdfHighlight2 ? (
                    <>
                      <View style={styles.listItemContainer}>
                        <Text style={styles.bulletPoint}>• </Text>
                        <Text style={styles.listItem}>
                          {professionalExperience.attributes.pdfHighlight2}
                        </Text>
                      </View>
                    </>
                  ) : null}
                  {professionalExperience.attributes.pdfHighlight3 ? (
                    <>
                      <View style={styles.listItemContainer}>
                        <Text style={styles.bulletPoint}>• </Text>
                        <Text style={styles.listItem}>
                          {professionalExperience.attributes.pdfHighlight3}
                        </Text>
                      </View>
                    </>
                  ) : null}
                </View>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <Image
                src={`${iconPath}/circle-graduation-cap.png`}
                style={styles.sectionHeadingIcon}
              />
              <Text>Education</Text>
            </View>

            {education.map((educationExperience) => (
              <View key={educationExperience.slug}>
                <View style={styles.itemHeading}>
                  <Text style={styles.bold}>
                    {educationExperience.attributes.achievement}
                  </Text>
                </View>
                <View style={[styles.container, { flexDirection: 'row' }]}>
                  <View
                    style={{ ...styles.itemSubheadingRow, display: 'flex' }}
                  >
                    <Image
                      src={`${iconPath}/university.png`}
                      style={styles.itemSubheadingIcon}
                    />
                  </View>
                  <View
                    style={{
                      ...styles.itemSubheadingRow,
                      ...styles.bold,
                      display: 'flex',
                      marginRight: 5,
                    }}
                  >
                    <Text>{educationExperience.attributes.institution}</Text>
                  </View>
                  <View
                    style={{
                      ...styles.itemSubheadingRow,
                      ...styles.italics,
                      display: 'flex',
                    }}
                  >
                    <Text>
                      {'Completed '}
                      {educationExperience.attributes.completionYear}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.section}>
            <View style={styles.sectionHeading}>
              <Image
                src={`${iconPath}/circle-briefcase.png`}
                style={styles.sectionHeadingIcon}
              />
              <Text>Certifications</Text>
            </View>
            {certs.map((cert) => (
              <View
                key={cert.slug}
                style={[styles.container, { flexDirection: 'row' }]}
              >
                <Text
                  style={{ ...styles.bold, display: 'flex', marginRight: 5 }}
                >
                  {cert.attributes.achievement}
                </Text>
                <Text style={{ ...styles.italics, display: 'flex' }}>
                  {'Completed '}
                  {cert.attributes.completionYear}
                </Text>
              </View>
            ))}
            {/*<View>*/}
            {/*  <UnorderedList>*/}
            {/*    {certs.map((cert) => (*/}
            {/*      <View key={cert.slug}>*/}
            {/*        /!*<NavListItem>*!/*/}
            {/*        /!*  *!/*/}
            {/*        /!*</NavListItem>*!/*/}
            {/*        /!*<div className="row">*!/*/}
            {/*        /!*  <Text style={{...styles.bold, display: "flex", flexDirection: "row"}}>*!/*/}
            {/*        /!*    {cert.attributes.achievement}*!/*/}
            {/*        /!*  </Text>*!/*/}
            {/*        /!*  <Text> - Completed {cert.attributes.completionYear}</Text>*!/*/}
            {/*        /!*</div>*!/*/}
            {/*        <View style={[styles.container, { flexDirection: 'row' }]}>*/}
            {/*          <View style={{ display: 'flex', marginRight: 5 }}>*/}
            {/*            <Text style={styles.bold}>*/}
            {/*              {cert.attributes.achievement}*/}
            {/*            </Text>*/}
            {/*          </View>*/}
            {/*          <View style={{ display: 'flex' }}>*/}
            {/*            <Text style={styles.italics}>*/}
            {/*              Completed - {cert.attributes.completionYear}*/}
            {/*            </Text>*/}
            {/*          </View>*/}
            {/*        </View>*/}
            {/*      </View>*/}
            {/*    ))}*/}
            {/*  </UnorderedList>*/}
            {/*</View>*/}
          </View>
          {/* TODO either make the privateInfo section toggleable or remove it altogether */}
          {/*<View style={styles.section}>*/}
          {/*  <View style={styles.sectionHeading}>*/}
          {/*    <Image*/}
          {/*      src={`${iconPath}/circle-pen-paintbrush.png`}*/}
          {/*      style={styles.sectionHeadingIcon}*/}
          {/*    />*/}
          {/*    <Text>Hobbies &amp; Interests</Text>*/}
          {/*  </View>*/}
          {/*  <Html*/}
          {/*    {...htmlProps}*/}
          {/*    stylesheet={{*/}
          {/*      ...htmlProps.stylesheet,*/}
          {/*      p: { marginBottom: spacers[1] },*/}
          {/*    }}*/}
          {/*  >*/}
          {/*    {hobbies.html}*/}
          {/*  </Html>*/}
          {/*</View>*/}
        </View>
      </Page>
    </Document>
  );
};

export default PDF;
