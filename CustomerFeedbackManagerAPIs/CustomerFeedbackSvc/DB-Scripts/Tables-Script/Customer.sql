USE [CustomerFeedbackDB]
GO
--DROP TABLE [dbo].[Customer]
/****** Object:  Table [dbo].[Customer]    Script Date: 11/13/2022 7:49:58 PM ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Customer](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[CustomerCaseId] [nvarchar](50) NOT NULL,
	[CustomerName] [nvarchar](50) NULL,
	[CustomerAge] [int] NULL,
	[CustomerGender] [nchar](10) NULL,
	[CaseCreationDateTime] [datetime2](7) NULL,
	[CustomerArivalDateTime] [datetime2](7) NULL,
	[CustomerDepartureDatetime] [datetime2](7) NULL,
	[CustomerImageBlobId] [nvarchar](max) NULL,
	[CustomerContactNumber] [nchar](10) NULL,
PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO


