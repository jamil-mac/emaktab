import React from "react";
import styled from "styled-components";
import { lightTheme, darkTheme } from "./theme.js";
import { FaEyeSlash } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { IoCalendarNumber } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

const DashboardContainer = styled.div`
  color: ${(p) => p.theme.text};
  padding: 30px 50px;
  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    padding: 25px 30px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }

  @media (max-width: 480px) {
    padding: 15px 10px;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 70px;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    gap: 40px;
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  @media (max-width: 640px) {
    display: none;
  }
`;

const StatCard = styled.div`
  background-color: ${(p) => p.theme.statCard};
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 1px 3px ${(props) => props.theme.cardShadow};
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 1200px) {
    padding: 15px;
    gap: 12px;
  }

  @media (max-width: 1024px) {
    padding: 18px;
  }
`;

const StatIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
  color: ${(p) => p.theme.statCard};

  @media (max-width: 1200px) {
    width: 18px;
    height: 18px;
    font-size: 12px;
  }
`;

const StatContent = styled.div`
  flex: 1;
`;

const SmallStat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
`;

const Statdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StatLabel = styled.p`
  margin: 0;
  font-size: 18px;
  opacity: 0.7;
  font-weight: 600;
  color: ${(p) => p.theme.text};

  @media (max-width: 1200px) {
    font-size: 16px;
  }

  @media (max-width: 1024px) {
    font-size: 15px;
  }
`;

const StatNumber = styled.p`
  margin: 5px 0 0 0;
  font-size: 24px;
  font-weight: bold;
  width: 35%;
  text-align: center;
  border-radius: 10px;
  color: ${(props) => props.numberColor};
  background-color: ${(props) => props.bgColor};

  @media (max-width: 1200px) {
    font-size: 20px;
    width: 40%;
  }

  @media (max-width: 1024px) {
    font-size: 22px;
  }
`;

const SectionTitle = styled.h2`
  margin: 0px;
  font-size: 26px;
  font-weight: 600;
  color: ${(props) => props.theme.text};

  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const PracticeDaysSection = styled.div`
  background-color: ${(props) => props.theme.cardBg};
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 1px 3px ${(props) => props.theme.cardShadow};

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 12px 8px;
    border-radius: 6px;
  }
`;

const HeaderRow = styled.div`
  padding: 0px 30px 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.inputBorder};

  @media (max-width: 768px) {
    padding: 0px 20px 10px 20px;
  }

  @media (max-width: 480px) {
    padding: 0px 10px 8px 10px;
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
    display: flex;
  }
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.buttonBg};
  color: white;
  border: none;
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.buttonHover};
  }

  @media (max-width: 480px) {
    padding: 10px 16px;
    font-size: 14px;
  }
`;

const Counter = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.text};

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1.2fr 80px;
  gap: 15px;
  padding: 20px;
  border-bottom: 1px solid ${(props) => props.theme.inputBorder};
  align-items: center;
  transition: all 0.2s ease;
  border-radius: 8px;
  margin: 4px 0;

  &:hover {
    background-color: #64646444;
    transform: translateY(-1px);
    box-shadow: 0 2px 8px ${(props) => props.theme.cardShadow};
    cursor: pointer;
  }

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 12px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
    padding: 12px 8px;
    margin: 8px 0;
    border: 1px solid ${(props) => props.theme.inputBorder};
    border-radius: 6px;

    &:hover {
      transform: none;
      box-shadow: 0 2px 4px ${(props) => props.theme.cardShadow};
    }
  }
`;

const TableCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: ${(props) => props.theme.text};
  padding: 8px 0;

  @media (max-width: 768px) {
    gap: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 14px;
    display: none;
  }
`;
const MobileTableCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
  color: ${(props) => props.theme.text};
  padding: 8px 0;

  @media (max-width: 768px) {
    gap: 10px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    gap: 8px;
    font-size: 14px;
  }
`;
const MobileTable = styled.div`
  display: none;
  @media (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
const CellIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: ${(props) => props.bgColor};
  color: white;
  flex-shrink: 0;
  font-weight: bold;

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 24px;
    height: 24px;
    font-size: 12px;
  }
`;

const CellContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media (max-width: 480px) {
    gap: 2px;
    width: 100%;
  }
`;

const CellIconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${(props) => props.theme.text};
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
    gap: 6px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const CellLabel = styled.span`
  font-size: 13px;
  opacity: 0.7;
  display: block;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const CellValue = styled.span`
  font-weight: 600;
  display: block;
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    word-break: break-word;
  }
`;

const ScoreBadge = styled.div`
  background-color: ${(props) => props.badgeColor};
  color: ${(props) => props.textColor};
  padding: 8px 12px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  min-width: 60px;
  border: 1px solid ${(props) => props.textColor}20;

  @media (max-width: 768px) {
    padding: 6px 10px;
    font-size: 13px;
    min-width: 50px;
  }

  @media (max-width: 480px) {
    padding: 8px 12px;
    font-size: 14px;
    min-width: 60px;
    justify-self: start;
    margin-top: 4px;
    display: none;
  }
`;

const practiceData = [
  {
    teacher: "Agzamov Boxodir",
    location: "TashGRES",
    date: "10/10/2023",
    phone: "+998901234567",
    score: 45,
    icon: "✓",
    iconBg: "#10b981",
    badgeBg: "#d1fae5",
  },
  {
    teacher: "Agzamov Boxodir",
    location: "TashGRES",
    date: "10/10/2023",
    phone: "+998901234567",
    score: 44,
    icon: "!",
    iconBg: "#f59e0b",
    badgeBg: "#fef3c7",
  },
  {
    teacher: "Agzamov Boxodir",
    location: "TashGRES",
    date: "10/10/2023",
    phone: "+998901234567",
    score: 43,
    icon: "✕",
    iconBg: "#ef4444",
    badgeBg: "#fee2e2",
  },
  {
    teacher: "Agzamov Boxodir",
    location: "TashGRES",
    date: "10/10/2023",
    phone: "+998901234567",
    score: 42,
    icon: "○",
    iconBg: "#6b7280",
    badgeBg: "#f3f4f6",
  },
  {
    teacher: "Agzamov Boxodir",
    location: "TashGRES",
    date: "10/10/2023",
    phone: "+998901234567",
    score: 41,
    icon: "○",
    iconBg: "#6b7280",
    badgeBg: "#f3f4f6",
  },
  {
    teacher: "Agzamov Boxodir",
    location: "TashGRES",
    date: "10/10/2023",
    phone: "+998901234567",
    score: 40,
    icon: "○",
    iconBg: "#6b7280",
    badgeBg: "#f3f4f6",
  },
];

const getBadgeColors = (score) => {
  if (score >= 45) return { bg: "#d1fae5", text: "#059669" };
  if (score >= 44) return { bg: "#fef3c7", text: "#d97706" };
  if (score >= 43) return { bg: "#fee2e2", text: "#dc2626" };
  return { bg: "#f3f4f6", text: "#374151" };
};

export default function PracticeDashboard({ isDark = false }) {
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <DashboardContainer>
      {/* Desktop Stats Cards */}
      <StatsGrid>
        <StatCard>
          <StatContent>
            <Statdiv>
              <StatLabel>Bajarilgan </StatLabel>
              <StatIcon bgColor="#10b981">✓</StatIcon>
            </Statdiv>
            <SmallStat>
              <StatNumber bgColor="#10b98134" numberColor="#10b981">
                1
              </StatNumber>
            </SmallStat>
          </StatContent>
        </StatCard>

        <StatCard>
          <StatContent>
            <Statdiv>
              <StatLabel>Topshirish kerak</StatLabel>
              <StatIcon bgColor="#f59e0b">!</StatIcon>
            </Statdiv>
            <SmallStat>
              <StatNumber bgColor="#f59f0b2c" numberColor="#f59e0b">
                1
              </StatNumber>
            </SmallStat>
          </StatContent>
        </StatCard>

        <StatCard>
          <StatContent>
            <Statdiv>
              <StatLabel>Tasdiqlanmagan </StatLabel>
              <StatIcon bgColor="#ef4444">✕</StatIcon>
            </Statdiv>
            <SmallStat>
              <StatNumber bgColor="#ef44442c" numberColor="#ef4444">
                1
              </StatNumber>
            </SmallStat>
          </StatContent>
        </StatCard>

        <StatCard>
          <StatContent>
            <Statdiv>
              <StatLabel>Kutilayotgan</StatLabel>
              <StatIcon bgColor={isDark ? "#1f2937" : "#DEDEDE"}>
                <FaEyeSlash color={isDark ? "#fff" : "#000"} />
              </StatIcon>
            </Statdiv>
            <SmallStat>
              <StatNumber
                bgColor={isDark ? "#1f29372e" : "#DEDEDE"}
                numberColor={isDark ? "#1f2937" : "black"}
              >
                43
              </StatNumber>
            </SmallStat>
          </StatContent>
        </StatCard>
      </StatsGrid>

      {/* Practice Days Section */}
      <PracticeDaysSection>
        <HeaderRow>
          <SectionTitle>PRACTICE DAYS</SectionTitle>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              height: "100%",
            }}
          >
            <Button>Hisobot</Button>
            <Counter>45/45</Counter>
          </div>
        </HeaderRow>

        {practiceData.map((row, index) => {
          const badgeColors = getBadgeColors(row.score);

          return (
            <TableRow key={index}>
              <TableCell>
                <CellIcon bgColor={row.iconBg}>{row.icon}</CellIcon>
                <CellContent>
                  <CellIconWrapper>
                    <PiStudentBold />
                    <CellLabel>Teacher</CellLabel>
                  </CellIconWrapper>
                  <CellValue>{row.teacher}</CellValue>
                </CellContent>
              </TableCell>

              <TableCell>
                <CellContent>
                  <CellIconWrapper>
                    <FaLocationDot />
                    <CellLabel>Location</CellLabel>
                  </CellIconWrapper>
                  <CellValue>{row.location}</CellValue>
                </CellContent>
              </TableCell>

              <TableCell>
                <CellContent>
                  <CellIconWrapper>
                    <IoCalendarNumber />
                    <CellLabel>Date</CellLabel>
                  </CellIconWrapper>
                  <CellValue>{row.date}</CellValue>
                </CellContent>
              </TableCell>

              <TableCell>
                <CellContent>
                  <CellIconWrapper>
                    <BsFillTelephoneFill />
                    <CellLabel>Phone Number</CellLabel>
                  </CellIconWrapper>
                  <CellValue>{row.phone}</CellValue>
                </CellContent>
              </TableCell>
              <MobileTable>
                {" "}
                <CellIcon bgColor={row.iconBg}>{row.icon}</CellIcon>
                <MobileTableCell>
                  <CellContent>
                    <CellIconWrapper>
                      <FaLocationDot />
                      <CellLabel>Location</CellLabel>
                    </CellIconWrapper>
                    <CellValue>{row.location}</CellValue>
                  </CellContent>
                </MobileTableCell>
                <ScoreBadge
                  style={{ display: "flex", justifyContent: "center" }}
                  badgeColor={badgeColors.bg}
                  textColor={badgeColors.text}
                >
                  {row.score}
                </ScoreBadge>
              </MobileTable>
              <ScoreBadge
                badgeColor={badgeColors.bg}
                textColor={badgeColors.text}
              >
                {row.score}
              </ScoreBadge>
            </TableRow>
          );
        })}
      </PracticeDaysSection>
    </DashboardContainer>
  );
}
