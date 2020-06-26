<%--<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="CalculaStV01._Default" %>--%>
<%@ Page Title="Calcula ST" Language="C#" MasterPageFile="~/DashboardFaturamento.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="CalculaStV01._Default" %>

<asp:Content ID="Content1" ContentPlaceHolderID="TituloPagina" runat="server">
    CalculaSt
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="CssExclusivos" runat="server">
    <asp:PlaceHolder runat="server">
        <%: Styles.Render("~/bundles/calculaStCSS") %>
    </asp:PlaceHolder>
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="mainPrincipal">
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
          Essa página destina-se exclusivamente para <strong>demonstração</strong> do produto desenvolvido, não tendo nenhuma ligação com banco de dados, sendo assim a mesma não atualiza qualquer número automaticamente,
            o que pode ocasionar em informações desatualizadas e erros de cálculos tributários.
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="centralizar" style="display: none;">
            <div id="ferramentas" class="tema">
                <div class="imagemFerramentas"><i id="addNew" class="fas fa-plus-square iconeAddCalculaSt"></i></div>
                <div class="imagemFerramentas"><i id="remove" class="fas fa-minus-square iconeRemoveCalculaSt"></i></div>
            </div>
            <div class="headerTotal">
                <div class="divHeader">
                    <div class="divParametros">
                        <div class="labelParametros label tema">Estado</div>
                        <div class="divInternoParametros">
                            <div class="estado"></div>
                            <div class="destinoMercadoria" style="display: none;"></div>
                            <div class="tipoCalculo" style="display: none;"></div>
                            <div class="contribuinte" style="display: none;"></div>
                            <div class="simplesNacional" style="display: none;"></div>
                            <div class="paginations">
                                <span class="pagOne"><i class="fas fa-circle"></i></span>
                                <span class="pagTwo"><i class="far fa-circle"></i></span>
                                <span class="pagThree"><i class="far fa-circle"></i></span>
                                <span class="pagFour"><i class="far fa-circle"></i></span>
                                <span class="pagFive"><i class="far fa-circle"></i></span>
                            </div>
                        </div>
                    </div>

                    <div class="labelBaseIcmsHeader label tema">Base de Cálculo</div>
                    <div class="labelIcmsHeader label tema">ICMS</div>
                    <div class="labelBaseIcmsStHeader label tema">Base ICMS ST</div>
                    <div class="labelStHeader label tema">ICMS ST</div>
                    <div class="labelTotalProdutosHeader label tema">Total Produtos</div>

                    <div class="divConteudo" id="baseCalculoHeader"></div>
                    <div class="divConteudo" id="icmsHeader"></div>
                    <div class="divConteudo" id="baseIcmsStHeader"></div>
                    <div class="divConteudo" id="stHeader"></div>
                    <div class="divConteudo" id="totalProdutosHeader"></div>

                    <div class="labelFecpHeader label tema">Fecp</div>
                    <div class="labelPisHeader label tema">Pis</div>
                    <div class="labelCofinsHeader label tema">Cofins</div>
                    <div class="labelIpiHeader label tema">IPI</div>
                    <div class="labelTotalNotaHeader label tema">Total da Nota</div>

                    <div class="divConteudo" id="fecpHeader"></div>
                    <div class="divConteudo" id="pisHeader"></div>
                    <div class="divConteudo" id="cofinsHeader"></div>
                    <div class="divConteudo" id="ipiHeader"></div>
                    <div class="divConteudo" id="totalNotaHeader"></div>

                </div>
            </div>


            <div class="divHeader2">

                <div class="labelItem label tema">ID</div>
                <div class="labelCodigo label tema">Código</div>
                <div class="labelDescricao label tema">Descrição</div>
                <div class="labelNcm label tema">N.C.M &nbsp <i class="fas fa-info-circle iDoNcm"></i></div>
                <div class="labelQuantidade label tema">Quant.</div>
                <div class="labelPreco label tema">Preço</div>
                <div class="labelTotal label tema">Total</div>
                <div class="labelIpi label tema">IPI</div>
                <div class="labelSt label tema">Valor ST</div>
                <div class="labelValorTotal label tema">Valor Total</div>
                <div class="labelAcresc label tema">Acres.</div>
                <div class="labelMva label tema">M.V.A</div>
                <div class="labelIcms label tema">ICMS</div>
                <div class="labelIntra label tema">I. Intra</div>

                <div class="divConteudo" id="item">0</div>
                <div class="divConteudo" id="divCodigo">
                    <input type="number" id="codigo" size="5" placeholder="Família" autocomplete="off" /><i class="fas fa-search pesquisarProd"></i></div>
                <div class="divConteudo" id="descricao"></div>
                <div class="divConteudo" id="ncm"></div>
                <div class="divConteudo" id="divQuantidade">
                    <input type="number" id="quantidade" size="5" placeholder="Mt/Kg" autocomplete="off" /></div>
                <div class="divConteudo" id="divPreco">
                    <input type="number" id="preco" size="5" placeholder="R$0,00" autocomplete="off" /></div>
                <div class="divConteudo" id="total"></div>
                <div class="divConteudo" id="ipi"></div>
                <div class="divConteudo" id="st"></div>
                <div class="divConteudo" id="valorTotal"></div>
                <div class="divConteudo" id="acresc"></div>
                <div class="divConteudo" id="mva"></div>
                <div class="divConteudo" id="icms"></div>
                <div class="divConteudo" id="intra"></div>

                <div id="observacao" class="label  tema">Observação</div>

                <div class="labelItensAdicionados label tema oculto" style="opacity: 0.00;">Itens Adicionados</div>

                <div class="labelItemAdicionados label tema oculto" style="opacity: 0.00;">ID</div>
                <div class="labelCodigoAdicionados label tema oculto" style="opacity: 0.00;">Cód.</div>
                <div class="labelDescricaoAdicionados label tema oculto" style="opacity: 0.00;">Descrição</div>
                <div class="labelNcmAdicionados label tema oculto" style="opacity: 0.00;">N.C.M &nbsp <i class="fas fa-info-circle iDoNcm"></i></div>
                <div class="labelQuantidadeAdicionados label tema oculto" style="opacity: 0.00;">Quant.</div>
                <div class="labelPrecoAdicionados label tema oculto" style="opacity: 0.00;">Preço</div>
                <div class="labelTotalAdicionados label tema oculto" style="opacity: 0.00;">Total</div>
                <div class="labelIpiAdicionados label tema oculto" style="opacity: 0.00;">IPI</div>
                <div class="labelStAdicionados label tema oculto" style="opacity: 0.00;">Valor St</div>
                <div class="labelValorTotalAdicionados label tema oculto" style="opacity: 0.00;">Valor Total</div>
                <div class="labelAcrescAdicionados label tema oculto" style="opacity: 0.00;">Acresc.</div>
                <div class="labelMvaAdicionados label tema oculto" style="opacity: 0.00;">M.V.A</div>
                <div class="labelIcmsAdicionados label tema oculto" style="opacity: 0.00;">ICMS</div>
                <div class="labelIntraAdicionados label tema oculto" style="opacity: 0.00;">Intra</div>

            </div>

            <div id="itensAdicionados"></div>

        </div>

    </div>
</asp:Content>
<asp:Content ID="Content4" ContentPlaceHolderID="ScriptExclusivo" runat="server">
    <asp:PlaceHolder runat="server">
        <%: Scripts.Render("~/bundles/calculaStJS") %>
    </asp:PlaceHolder>
</asp:Content>
