FROM mcr.microsoft.com/dotnet/sdk:5.0

WORKDIR /print-date-v1
COPY . ./

RUN dotnet restore
RUN dotnet publish -c Release -o out

ENTRYPOINT dotnet out/App.dll