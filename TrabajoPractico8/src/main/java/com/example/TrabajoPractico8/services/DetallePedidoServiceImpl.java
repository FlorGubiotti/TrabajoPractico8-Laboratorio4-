package com.example.TrabajoPractico8.services;

import com.example.TrabajoPractico8.entities.DetallePedido;
import com.example.TrabajoPractico8.repositories.BaseRepository;
import com.example.TrabajoPractico8.repositories.DetallePedidoRepository;
import org.springframework.stereotype.Service;

@Service
public class DetallePedidoServiceImpl extends BaseServiceImpl<DetallePedido, Long> implements DetallePedidoService {

    private DetallePedidoRepository detallePedidoRepository;

    public DetallePedidoServiceImpl(DetallePedidoRepository detallePedidoRepository) {
        super((BaseRepository<DetallePedido, Long>) detallePedidoRepository);
        this.detallePedidoRepository = detallePedidoRepository;
    }
}
