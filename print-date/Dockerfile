FROM mcr.microsoft.com/dotnet/sdk:5.0 as build-env
WORKDIR /print-date
COPY . ./
RUN dotnet publish -c Release -o out


FROM mcr.microsoft.com/dotnet/aspnet:5.0 as run
WORKDIR /print-date
COPY --from=build-env print-date/out .
ENV DOTNET_EnableDiagnostics=0
ENTRYPOINT ["dotnet", "App.dll"]